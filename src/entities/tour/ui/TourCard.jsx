import React from "react"
import { Button } from "../../../shared";
import placeholder from '../assets/placeholder.jpg'
import s from './TourCard.module.css';

export const TourCard = (props) => {
    return (
        <article className={s.card}>
            {console.log(`ССЫЛКА: ${props.image}`)}
            <img
                src={props.image || placeholder}
                alt={props.title}
                className={s.image} />

            <div className={s.content}>
                <h3>{props.title}</h3>

                <div className={s.info}>
                    <span>{props.duration}</span>
                    <span>{props.price}</span>
                </div>

                <Button
                    className={s.button}
                    onClick={props.onClick}
                    children={"Подробнее"} />
            </div>
        </article>
    );
};