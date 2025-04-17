import React from 'react'
import photo1 from '../assets/guide1.jpg'
import photo2 from '../assets/guide2.jpg'
import photo3 from '../assets/guide3.jpg'
import s from './Team.module.css'

const teamMembers = [
  {
    name: 'Анна Петрова',
    position: 'Генеральный директор',
    bio: 'Основатель агентства, эксперт по культурному туризму',
    photo: photo1,
  },
  {
    name: 'Дмитрий Соколов',
    position: 'Главный гид',
    bio: 'Автор 15 уникальных маршрутов по Северному Кавказу',
    photo: photo2,
  },
  {
    name: 'Мария Иванова',
    position: 'Менеджер по туризму',
    bio: 'Специалист по организации корпоративных туров',
    photo: photo3,
  },
]

export const Team = () => {
  return (
    <section className={s.team}>
      <h2 className={s.title}>Наша команда</h2>

      <div className={s.grid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={s.member}>
            <img src={member.photo} alt={member.name} className={s.photo} />
            <h4 className={s.name}>{member.name}</h4>
            <p className={s.position}>{member.position}</p>
            <p className={s.bio}>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
