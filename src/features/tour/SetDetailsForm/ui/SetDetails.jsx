import React, { useState } from 'react';
import { Button } from '../../../../shared'

import s from './SetDetails.module.css';
import { useFormHandlers } from '../lib/useFormHandlers';
import { useDispatch } from 'react-redux';
import { setTravelDetails } from '../../../../pages';

export const SetDetails = ({ className }) => {
    const [formData, setFormData] = useState({
        startDate: '',
        endDate: '',
        peopleCount: '',
        wishes: '',
        serviceClass: ''
    });

    const [errors, setErrors] = useState({
        startDate: '',
        endDate: '',
        peopleCount: ''
    });

    const dispatch = useDispatch();
    const { handleChange, handleSubmit } = useFormHandlers(formData, setFormData, setErrors, dispatch, setTravelDetails);




    return (
        <div className={`${s.container} ${className}`}>
            <div className={s.dateContainer}>
                <p>Начало</p>
                <input
                    type="date"
                    name="startDate"
                    className={`${s.dateInput} ${errors.startDate ? s.error : ''}`}
                    onChange={handleChange}
                />
                {errors.startDate && <span className={s.errorText}>{errors.startDate}</span>}

                <p>Конец</p>
                <input
                    type="date"
                    name="endDate"
                    className={`${s.dateInput} ${errors.endDate ? s.error : ''}`}
                    onChange={handleChange}
                />
                {errors.endDate && <span className={s.errorText}>{errors.endDate}</span>}
            </div>

            <input
                type="text"
                name="peopleCount"
                className={`${s.textInput} ${errors.peopleCount ? s.error : ''}`}
                placeholder="Количество человек"
                onChange={handleChange}
            />
            {errors.peopleCount && <span className={s.errorText}>{errors.peopleCount}</span>}

            <input
                type="text"
                name="wishes"
                className={s.textInput}
                placeholder="Пожелания"
                onChange={handleChange}
            />

            <select
                name="serviceClass"
                className={s.select}
                defaultValue=""
                required
                onChange={handleChange}
            >
                <option value="" disabled>Выберите уровень комфорта</option>
                <option value="Эконом">Эконом</option>
                <option value="Комфорт">Комфорт</option>
                <option value="Премиум">Премиум</option>
            </select>
            <Button
            onClick= {handleSubmit}
            className = {s.button}
            children = {"Далее"}/>
        </div>
    );
};