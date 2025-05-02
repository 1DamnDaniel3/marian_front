import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Review.module.css';

export const ReviewPortal = ({ onClose }) => {
    useEffect(() => {
        // Блокируем скролл страницы при открытии модального окна
        document.body.style.overflow = 'hidden';
        return () => {
            // Возвращаем скролл при закрытии
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет логика отправки отзыва
        console.log('Отзыв отправлен');
        onClose();
    };

    return createPortal(
        <div className={s.portalBackdrop} onClick={handleBackdropClick}>
            <div className={s.portalContent}>
                <button className={s.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>Оставить отзыв</h2>
                <form onSubmit={handleSubmit}>
                    <div className={s.formGroup}>
                        <label htmlFor="name">Ваше имя</label>
                        <input id="name" type="text" required />
                    </div>
                    <div className={s.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" required />
                    </div>
                    <div className={s.formGroup}>
                        <label htmlFor="review">Ваш отзыв</label>
                        <textarea id="review" rows="5" required></textarea>
                    </div>
                    <div className={s.formGroup}>
                        <label htmlFor="rating">Оценка</label>
                        <select id="rating" required>
                            <option value="">Выберите оценку</option>
                            <option value="5">5 - Отлично</option>
                            <option value="4">4 - Хорошо</option>
                            <option value="3">3 - Удовлетворительно</option>
                            <option value="2">2 - Плохо</option>
                            <option value="1">1 - Ужасно</option>
                        </select>
                    </div>
                    <button type="submit" className={s.submitButton}>
                        Отправить отзыв
                    </button>
                </form>
            </div>
        </div>,
        document.getElementById('portal-root')
    );
};