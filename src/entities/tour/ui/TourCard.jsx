import React from "react"
import { Button } from "../../../shared";
import placeholder from '../assets/placeholder.jpg'
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
                    <span>{props.duration}</span>
                    <span>{props.persons}</span>
                    <span>{props.description}</span>
                </div>
                <h2>{props.price}</h2>
                <Button
                    className={s.button}
                    onClick={props.onClick}
                    children={props.children} />
            </div>
        </article>
    );
};