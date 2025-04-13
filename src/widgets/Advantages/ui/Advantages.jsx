import { AdvantageCard } from '../../../shared'
import s from './Advantages.module.css'

const advantages = [
    {
        title: '🛫 10+ направлений',
        description: 'От Калининграда до Камчатки',
    },
    {
        title: '👍 98% положительных отзывов',
        description: 'Нас рекомендуют друзьям',
    },
    {
        title: '💼 5 лет опыта',
        description: 'Профессиональная организация',
    },
]

export const Advantages = () => {
    return (
        <section className={s.advantages}>

            <div className={s.advantagesGrid}>
                {advantages.map((adv, i) => (
                    <AdvantageCard
                        key={i}
                        title={adv.title}
                        description={adv.description}
                    />
                ))}
            </div>

        </section>
    )
}
