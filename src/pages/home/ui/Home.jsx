import React from "react";
import s from './Home.module.css'
import { MainHeader, TourFinder, Advantages, PopularTours, FindNoTours, MainFooter } from "../../../widgets";
import { Slider } from "./Slider";
import { useNavigate } from "react-router-dom";

const homeAdvantages  = [
    {
        title: '🛫 10+ направлений',
        description: 'От Калининграда до Камчатки',
    },
    {
        title: '👍 98% положительных отзывов',
        description: 'Нас рекомендуют друзьям',
    },
    {
        title: '💼 5 лет опыта',
        description: 'Профессиональная организация',
    },
]

export const Home = () => {

    const navigate = useNavigate()

    return(
        <>
        <MainHeader/>
        <Slider/>
        <TourFinder/>
        <Advantages items={homeAdvantages}/>
        <PopularTours children={"Подробнее"} onClick={()=> navigate('/tours')}/>
        <FindNoTours/>
        <MainFooter/>
        </>
    )
} 
