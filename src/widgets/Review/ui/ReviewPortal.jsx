import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { APIs } from '../../../shared';
import s from './Review.module.css';
import { selectUser } from '../../../app/model/authSlice';

export const ReviewPortal = ({ onClose }) => {

    const [tours, setTours] = useState([])
    const [info, setInfo] = useState({
        tour_id: "",
        rating: "",
        comment: "",
    })
    const [error, setError] = useState(null)
    const user = useSelector(selectUser)



    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    useEffect(() => {

        APIs.tour.getTours()
            .then(response => {
                setTours(response.data)
            })
            .catch((err) => {
                setError(err.message)
            })
    }, []);


    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setInfo(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewData = {
            ...info,
            user_id: user.id
        }
        // Здесь будет логика отправки отзыва
        console.log('Отзыв отправлен', reviewData);
        const response = APIs.review.addReview(reviewData)
        console.log(response)
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
                        <label htmlFor="tour_id">Тур</label>
                        <select 
                            id="tour_id" 
                            required 
                            value={info.tour_id}
                            onChange={handleChange}
                        >
                            <option value="">Выберите тур</option>
                            {tours.map(tour => (
                                <option key={tour.id} value={tour.id}>
                                    {tour.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={s.formGroup}>
                        <label htmlFor="comment">Ваш отзыв</label>
                        <textarea 
                            id="comment" 
                            rows="5" 
                            required
                            value={info.comment}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className={s.formGroup}>
                        <label htmlFor="rating">Оценка</label>
                        <select 
                            id="rating" 
                            required
                            value={info.rating}
                            onChange={handleChange}
                        >
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