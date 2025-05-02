import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, DefaultInput, validateEmail, ValidationError } from "../../../../shared";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../../app/context/AuthContext.js';
import image from '../../../../shared/assets/logo.png'

import { loginApi } from "../api/api";
import s from './LoginForm.module.css';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { login } = useAuth(); 

    const warningMessages = {
        0: "",
        1: "Поля не могут быть пустыми",
        2: "Неверный Email или пароль",
        3: "Такой почты не существует"
    };

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [isChanging, setIsChanging] = useState(false);
    const [warningText, setWarningText] = useState('');

    const showWarningMessage = () => {
        setIsChanging(true);
        setTimeout(() => setIsChanging(false), 500);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleLogin = async () => {
        if (!formData.email || !formData.password) {
            setWarningText(1);
            showWarningMessage();
            return;
        }
        if (!validateEmail(formData.email)) {
            setWarningText(3);
            showWarningMessage();
            return;
        }

        try {
            setWarningText(0);
            const response = await loginApi(formData);
            if (response?.status === 200) {
                console.log("Успешный вход:", response.data);
                const token = response.data.user; 
                login(token); 
                navigate('/Home');
            } else {
                console.error("Ошибка входа:", response?.message || "Неизвестная ошибка");
                setWarningText(2);
                showWarningMessage();
            }
        } catch (error) {
            console.error("Ошибка сети или сервера:", error);
            setWarningText(2);
            showWarningMessage();
        }
    };

    return (
        <div className={s.r_form}>
            <div className={s.logo_label}>
                <img src={image} className={s.logo_img} alt="Logo" />
                <span className={s.label}>Welcome</span>
            </div>

            <div className={s.inputs}>
                <DefaultInput type='text' placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
                <DefaultInput type='password' placeholder='Пароль' name="password" value={formData.password} onChange={handleChange} />

                <ValidationError warningText={warningText} isChanging={isChanging} warningMessages={warningMessages} />

                <Button children={"ВОЙТИ"} onClick={handleLogin} />
            </div>
        </div>
    );
};