import starImg from '../assets/star.svg'
import placeholder from '../../../shared/assets/placeholder.jpg'
import s from './ReviewCard.module.css'



export const ReviewCard = ({ className, user_name, rating, comment, data, tourTitle, image }) => {



    return (

        <div className={`${s.card} ${className || ''}`}>

            <h2>{user_name}</h2>
            <div className={s.image}>
                <img src={image || placeholder} alt={image} />
            </div>
            <h3>{tourTitle}</h3>
            <p>{data}</p>
            <div className={s.rating_container}>

                <p>{rating}</p>
                {Array.from({ length: rating }).map((_, index) => (
                    <img
                        key={index}
                        src={starImg}
                        alt={starImg}
                        className={s.star} />
                ))}

            </div>

            <span>{comment}</span>


        </div>

    )

}