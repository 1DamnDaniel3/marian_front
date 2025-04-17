import React from 'react'
import s from './AdvantageCard.module.css'

export const AdvantageCard = (props) => {
  return (
    <div className={`${s.card} ${props.className || ''}`}>
      <h3 className={s.title}> {props.title} </h3>
      <p className={s.description}> {props.description} </p>
    </div>
  )
}
