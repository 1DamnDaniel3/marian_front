import React from 'react';
import image from '../../assets/logo_telegram_airplane_air_plane_paper_airplane_icon_143169.png'
import s from './SubscribeForm.module.css';

export const SubscribeForm = ({onSubmit}) => (
  <form
    className={s.form}
    onSubmit={onSubmit}
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
