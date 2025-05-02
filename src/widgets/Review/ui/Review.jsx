import s from './Review.module.css'
import { SetReviews } from '../../../features'
import { useState } from 'react'
import { ReviewPortal } from './ReviewPortal'
import { Button } from '../../../shared'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../../app/model/authSlice'
import { useNavigate } from 'react-router-dom'

export const Review = () => {

    const navigate = useNavigate()
    const isLogin = useSelector(selectIsLoggedIn)
    const [isPortalOpen, setIsPortalOpen] = useState(false);

    const goToRegisterMister = () => {
        navigate('/registration')
    }

    const openPortal = () => {
        setIsPortalOpen(true);
    };

    const closePortal = () => {
        setIsPortalOpen(false);
    };

    return (
        <div className={s.reviewContainer}>
            <h1>Отзывы наших клиентов</h1>
            <h2>Более 500 довольных туристов доверили нам свои путешествия</h2>
            <h3>Мы ценим каждого клиента и стремимся сделать каждый тур идеальным. Ваши впечатления помогают нам становиться лучше. Здесь собраны реальные отзывы людей, которые уже путешествовали с нами.</h3>
            {isLogin === true &&
                <Button
                    children={"Оставить отзыв"}
                    className={s.button}
                    onClick={openPortal}
                />}
            {isLogin === false &&
                <Button
                    children={"Оставить отзыв"}
                    className={s.button}
                    onClick={goToRegisterMister}
                />}

            <div className={s.content}>
                <SetReviews className={s.cards} />
            </div>

            {isPortalOpen && <ReviewPortal onClose={closePortal} />}
        </div>
    )
}