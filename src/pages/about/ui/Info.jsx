import s from './Info.module.css'
import image from '../../../shared/assets/office.jpg'

const text1 = `Мы начали свой путь в 2018 году с маленького офиса в Ростове-на-Дону.
Сегодня наша сеть охватывает 15 городов России, а наши туристы посетили более 50 уникальных локаций.`

const text2 = `Наша миссия - показать настоящую Россию, её скрытые жемчужины и уникальную культуру.
 Мы работаем только с проверенными гидами и местными экспертами.`



export const Info = () => {

    return (
        <div className={s.InfoBlock}>
            <h1>Наше турагентство</h1>
            <h2>Более 5 лет создаём незабываемые путешествия</h2>

            <div className={s.discription}>
                <div className={s.textContainer}>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>

                <img src={image} alt="office" />
            </div>
        </div>
    )
}