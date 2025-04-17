import React from "react";
import logo from "../../assets/logo.png";
import s from "./Header.module.css";

export const Header = () => {
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
                            <a href="/services">Услуги</a>
                            <ul className={s.submenu}>
                                <li><a href="/tours">Готовые туры</a></li>
                                <li><a href="/custom">Индивидуальные туры</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Ещё</a>
                            <ul className={s.submenu}>
                                <li><a href="/reviews">Отзывы</a></li>
                                <li><a href="/favorites">Избранное</a></li>
                            </ul>
                        </li>
                        <li><a href="/contact">Контакты</a></li>
                    </ul>


                {/* Button */}
                <div className={s.headerBtn}>
                    <a href="#" className={s.btn}>
                        Выбрать тур
                    </a>
                </div>

                {/* Mobile Menu */}
                <div className={s.mobileCol}>
                    <div className={s.mobileMenu}></div>
                </div>
            </div>
        </header>
    );
};
