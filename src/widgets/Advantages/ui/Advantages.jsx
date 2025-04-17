import { AdvantageCard } from '../../../shared'
import s from './Advantages.module.css'



export const Advantages = ({ items, title, className, cardClassName }) => {

    return (
        <section className={`${s.advantages} ${className || ''}`}>
          {title && <h2 className={s.title}>{title}</h2>}
          <div className={s.advantagesGrid}>
            {items.map((adv, i) => (
              <AdvantageCard key={i} {...adv} className={cardClassName}/>
            ))}
          </div>
        </section>
      )
}
