import React from "react";
import { Header } from '../../../shared'
import s from './MainHeader.module.css'

export const MainHeader = () => {
    return (
        <div className={s.wrapper}>
            <Header />
        </div>
    )
}