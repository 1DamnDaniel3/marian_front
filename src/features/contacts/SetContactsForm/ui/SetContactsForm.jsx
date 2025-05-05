import { useSelector } from 'react-redux'
import { ContactsForm } from '../../../../entities'
import { selectUser } from '../../../../app/model/authSlice'
import { APIs } from '../../../../shared'
import { useState } from 'react'
import image from '../../../../shared/assets/Party.svg'
import s from './SetContactsForm.module.css'




export const SetContactsForm = () => {

    const user = useSelector(selectUser)
    const [isSended, setIsSended] = useState(false);




    const handleSubmit = async (formData) => {
        try {
            const response = await APIs.contacts.postContacts(formData)
            setIsSended(true)
            return response.data
        } catch (err) {
            console.error('Ошибка при отправке:', err)

        }

    }


    return (
        <div className={s.setContects}>
            {isSended === false && (
                <ContactsForm name={user?.name} email={user?.email} onSubmit={handleSubmit} />
            )}
            {isSended === true && (
                <div className={s.successContainer}>
                    <h1>Success</h1>
                    <img src={image} alt="Success illustration" />
                </div>
            )}
        </div>
    )
}