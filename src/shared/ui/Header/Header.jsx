import React from "react";
import logo from "../../assets/logo.png";
import s from "./Header.module.css";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerArea}>
                <div className={s.mainHeader}>
                    <div className={s.container}>
                        <div className={s.row}>
                            {/* Logo */}
                            <div className={s.logoCol}>
                                <div className={s.logo}>
                                    <a href="/">
                                        <img src={logo} alt="Логотип" />
                                    </a>
                                </div>
                            </div>

                            {/* Main Menu */}
                            <div className={s.menuCol}>
                                <div className={s.mainMenu}>
                                    <nav>
                                        <ul className={s.navigation}>
                                            <li><a href="/">Главная</a></li>
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
                                    </nav>
                                </div>
                            </div>

                            {/* Button */}
                            <div className={s.btnCol}>
                                <div className={s.headerBtn}>
                                    <a href="#" className={s.btn}>
                                        Выбрать тур
                                    </a>
                                </div>
                            </div>

                            {/* Mobile Menu */}
                            <div className={s.mobileCol}>
                                <div className={s.mobileMenu}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
