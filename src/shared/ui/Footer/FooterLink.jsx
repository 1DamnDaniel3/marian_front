import React from 'react';
import s from './FooterLink.module.css';

export const FooterLink = ({ href, children }) => (
  <li className={s.link}><a href={href}>{children}</a></li>
);
