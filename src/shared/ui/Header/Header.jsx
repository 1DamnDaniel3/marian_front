import React from "react";
import logo from "../../assets/logo.png";
import s from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsLoggedIn, selectUser } from "../../../app/model/authSlice";
import { Link } from 'react-router-dom';

export const Header = () => {

    const dispatch = useDispatch()
    const isLoggin = useSelector(selectIsLoggedIn)
    const user = useSelector(selectUser)

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <header className={s.header}>
            <div className={s.row}>
                {/* Logo */}
                <div className={s.logo}>
                    <a href="/">
                        <img src={logo} alt="Логотип" />
                    </a>

                </div>

                {/* Main Menu */}

                <ul className={s.navigation}>
                    <li><a href="/Home">Главная</a></li>
                    <li><a href="/about">О нас</a></li>
                    <li><a href="/regions">Регионы</a></li>
                    <li>
                        <a href="/tours">Услуги</a>
                        <ul className={s.submenu}>
                            <li><a href="/tours">Готовые туры</a></li>
                            <li><a href="/custom">Индивидуальные туры</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Ещё</a>
                        <ul className={s.submenu}>
                            <li><a href="/reviews">Отзывы</a></li>
                            {/* <li><a href="/favorites">Избранное</a></li> */}
                        </ul>
                    </li>
                    <li><a href="/contact">Контакты</a></li>
                    
                    {/* ===============  ADMIN PANEL ====================== */}
                    {user && user.role === "admin" && (
                        <>
                        <li><a href="/manage/users">Пользователи</a></li>
                        <li><a href="/manage/tours">Туры</a></li>
                        </>
                    )}
                    {user && user.role === "moderator" && (
                        <>
                        <li><a href="/manage/tours">Туры</a></li>
                        </>
                    )}
                </ul>


                {/* Button */}
                <div className={s.headerBtn}>
                    {isLoggin === true &&
                        <a href="/tours" className={s.btn}>
                            Выбрать тур
                        </a>}
                    {isLoggin === false &&
                        <a href="/registration" className={s.btn}>
                            Выбрать тур
                        </a>}

                </div>
                {!isLoggin ? (
                    <Link className={s.join} to="/registration">Войти</Link>
                ) : (
                    <button className={s.button} onClick={handleLogout}>Выйти</button>
                )}

                {/* Mobile Menu */}
                <div className={s.mobileCol}>
                    <div className={s.mobileMenu}></div>
                </div>
            </div>
        </header>
    );
};
