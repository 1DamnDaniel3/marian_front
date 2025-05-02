import s from './DefaultInput.module.css'
import { useState } from 'react';
import viewIcon from '../../assets/view.png';
import hideIcon from '../../assets/hide.png';

export const DefaultInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={s.inputWrapper}>
            <input
                className={s.input}
                type={props.type === 'password' ? (showPassword ? 'text' : 'password') : props.type}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
            {props.type === 'password' && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={s.toggleButton}
                >
                    {showPassword ? <img src={viewIcon} alt='view'/> : <img src={hideIcon} alt='hide'/>}
                </button>
            )}
        </div>
    );
};