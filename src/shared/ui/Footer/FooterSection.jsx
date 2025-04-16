import React from 'react';
import s from './FooterSection.module.css';

export const FooterSection = ({ title, children }) => (
  <section className={s.section}>
    <h4>{title}</h4>
    <ul>{children}</ul>
  </section>
);
