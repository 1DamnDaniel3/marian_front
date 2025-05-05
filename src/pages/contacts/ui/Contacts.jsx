import { HeroBlock, Map } from '../../../shared'
import { MainFooter, MainHeader } from '../../../widgets'
import { SetContactsForm } from '../../../features'
import image from '../../../shared/assets/image.png'
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsPage}>
            <MainHeader />
            <HeroBlock image={image} heroTitle={"Контакты"} heroDescript={"Контакты"} />
            
            <div className={s.contentWrapper}>
                <Map className={s.map} />
                
                <div className={s.contactsContainer}>
                    <div className={s.contactInfo}>
                        <h2 className={s.sectionTitle}>Наши контакты</h2>
                        
                        <div className={s.contactItem}>
                            <div className={s.iconWrapper}>
                                <i className={`fas fa-map-marker-alt ${s.icon}`}></i>
                            </div>
                            <div>
                                <h4 className={s.contactTitle}>Адрес офиса</h4>
                                <p className={s.contactText}>г. Ростов-на-Дону, ул. Гагарина 1А, офис 305</p>
                            </div>
                        </div>

                        <div className={s.contactItem}>
                            <div className={s.iconWrapper}>
                                <i className={`fas fa-phone-alt ${s.icon}`}></i>
                            </div>
                            <div>
                                <h4 className={s.contactTitle}>Телефон</h4>
                                <p className={s.contactText}><a href="tel:+79896291760" className={s.contactLink}>+7 (989) 629-17-60</a></p>
                            </div>
                        </div>

                        <div className={s.contactItem}>
                            <div className={s.iconWrapper}>
                                <i className={`fas fa-envelope ${s.icon}`}></i>
                            </div>
                            <div>
                                <h4 className={s.contactTitle}>Email</h4>
                                <p className={s.contactText}><a href="mailto:turRussin@yandex.ru" className={s.contactLink}>turRussin@yandex.ru</a></p>
                            </div>
                        </div>

                        <div className={s.contactItem}>
                            <div className={s.iconWrapper}>
                                <i className={`fas fa-clock ${s.icon}`}></i>
                            </div>
                            <div>
                                <h4 className={s.contactTitle}>Часы работы</h4>
                                <p className={s.contactText}>Пн-Пт: 09:00 - 20:00<br/>Сб-Вс: 10:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={s.formWrapper}>
                        <SetContactsForm/>
                    </div>
                </div>
            </div>
            
            <MainFooter />
        </div>
    )
}