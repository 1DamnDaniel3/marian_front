import { Button } from '../../../../shared'
import { useNavigate } from 'react-router-dom'
import s from './FindNoTours.module.css'


export const FindNoTours = () => {

    const navigate = useNavigate();

    return (
        <div className={s.noTours}>
            <h1> Не нашли подходящий тур? </h1>
            <h2> Мы создадим индивидуальную программу специально для вас!</h2>
            <Button
                className={s.button}
                onClick={() => { navigate('/custom') }}
                children={"Заказать тур"}
                style={{ width: "300px", height: "50px" }}
            />

        </div>
    )
}