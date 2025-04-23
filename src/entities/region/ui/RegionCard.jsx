import { Button } from '../../../shared'
import placeholder from '../assets/placeholder.jpg'
import s from './RegionCard.module.css'

export const RegionCard = ({
    className, image,
    name, season,
    label, landmark1,
    landmark2, landmark3,
    onClick, children }) => {

    return (
        <div className={`${s.card} ${className || ''}`}>

            <img
                src={image || placeholder}
                alt={name}
                className={s.image}
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = placeholder;
                }} />

            <div className={s.description}>
                <h1>{name}</h1>
                <h3 >Сезоны: {season}</h3>
                <h3>{label}</h3>
                {landmark1 && <p>{landmark1}</p>}
                {landmark2 && <p>{landmark2}</p>}
                {landmark3 && <p>{landmark3}</p>}

            </div>
            <Button
                className={s.button}
                onClick={onClick}
                children={children} />
        </div>
    )
}