import React from 'react';
import image from '../../assets/logo_telegram_airplane_air_plane_paper_airplane_icon_143169.png'
import s from './SubscribeForm.module.css';

export const SubscribeForm = () => (
  <form
    className={s.form}
    target="_blank"
    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
    method="get"
  >
    <input
      type="email"
      name="email"
      placeholder="Ваша почта..."
      onFocus={(e) => (e.target.placeholder = '')}
      onBlur={(e) => (e.target.placeholder = 'Ваша почта...')}
    />
    <button type="submit">
      <img src={image} alt="" />
    </button>
  </form>
);
