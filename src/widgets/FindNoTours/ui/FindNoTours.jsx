import { Button } from '../../../shared'
import s from './FindNoTours.module.css'


export const FindNoTours = () => {

    return (
        <div className={s.noTours}>
            <h1> Не нашли подходящий тур? </h1>
            <h2> Мы создадим индивидуальную программу специально для вас!</h2>
            <Button
                className={s.button}
                onClick={console.log(`Need add navigation to individual tours`)}
                children={"Заказать тур"}
                style={{ width: "300px", height: "50px" }}
            />

        </div>
    )
}