import s from './ContactsForm.module.css'
import { Button } from '../../../shared'

export const ContactsForm = ({ name, email, onSubmit }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        onSubmit(data)
    }

    return (
        <div className={s.container}>
            <form className={s.contactForm} onSubmit={handleSubmit}>
                <h3 className={s.title}>Получить консультацию</h3>
                <input type="text" name="name" placeholder="Ваше имя" required className={s.input} defaultValue={name} />
                <input type="email" name="email" placeholder="Ваш email" required className={s.input} defaultValue={email} />
                <textarea rows="5" name="question" placeholder="Ваш вопрос..." required className={s.textarea}></textarea>
                <Button
                    type="submit"
                    className={s.submitButton}
                    children={"Отправить заявление..."}
                />
            </form>
        </div>
    )
}