import React from "react"
import { Button } from "../../../shared";

import placeholder from '../assets/placeholder.jpg'
import clockImg from '../assets/clock_icon-icons.com_54407.svg'
import groupImg from '../assets/group-profile-users_icon-icons.com_73540.svg'
import s from './TourCard.module.css';

export const TourCard = (props) => {
    return (
        <article className={s.card}>
            <img
                src={props.image || placeholder}
                alt={props.title}
                className={s.image} />

            <div className={s.content}>
                <h3>{props.title}</h3>

                <div className={s.info}>
                    <span><img src={clockImg} alt={clockImg} />{props.duration}</span>
                    <span><img src={groupImg} alt={groupImg} />{props.persons}</span>
                    <span>{props.description}</span>
                </div>
                <h2>{`${props.price} ₽`}</h2>
                <Button
                    className={`${s.button} ${props.className || ''} `}
                    onClick={props.onClick}
                    children={props.children} />
            </div>
        </article>
    );
};