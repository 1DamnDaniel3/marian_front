import React from "react";
import s from './Home.module.css'
import { MainHeader, TourFinder, Advantages, PopularTours, FindNoTours, MainFooter } from "../../../widgets";
import { Slider } from "./Slider";


export const Home = () => {
    return(
        <>
        <MainHeader/>
        <Slider/>
        <TourFinder/>
        <Advantages/>
        <PopularTours/>
        <FindNoTours/>
        <MainFooter/>
        </>
    )
} 
