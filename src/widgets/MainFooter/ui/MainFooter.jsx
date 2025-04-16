import React from 'react';
import logo from '../../../shared/assets/logo.png'
import { FooterLink, FooterSection, SubscribeForm } from '../../../shared';
import s from './MainFooter.module.css';

export const MainFooter = () => (
  <footer className={s.footer}>
    <div className={s.container}>
      <div className={s.column}>
        <img src={logo} alt="Главная" className={s.logo} />
        <p>© {new Date().getFullYear()} Все права защищены</p>
      </div>

      <FooterSection title="Важные ссылки">
        <FooterLink href="#">О турагенстве</FooterLink>
        <FooterLink href="#">Наши лучшие туры</FooterLink>
        <FooterLink href="#">Наша галерея</FooterLink>
        <FooterLink href="#">Наш сервис</FooterLink>
      </FooterSection>

      <FooterSection title="Обратная связь">
        <FooterLink href="#">Моб. Телефон: +7(989)629-17-60</FooterLink>
        <FooterLink href="#">Telegram: @GreatUpis787</FooterLink>
        <FooterLink href="#">turRussin@yandex.ru</FooterLink>
      </FooterSection>

      <FooterSection title="Адрес главного офиса">
        <FooterLink href="#">Гагарина 1А</FooterLink>
        <FooterLink href="#">Ростов-на-Дону, 344016</FooterLink>
        <SubscribeForm />
      </FooterSection>
    </div>
  </footer>
);
