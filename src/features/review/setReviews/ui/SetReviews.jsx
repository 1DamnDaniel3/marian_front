import { useDispatch, useSelector } from 'react-redux'
import { selectReviewItems } from '../model/reviewsSelectors'
import { ReviewCard } from '../../../../entities'
import s from './SetReviews.module.css'
import { useEffect } from 'react'
import { fetchReviews } from '../model/reviewsSlice'
import { formatDate } from '../lib/FormateDate'

export const SetReviews = ({ className }) => {


    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(fetchReviews())

    }, [dispatch])

    const items = useSelector(selectReviewItems);



    return (
        <div className={s.setReviews}>

            {items.map(review => (
                <ReviewCard
                    key={review.id}
                    className={className}
                    user_name={review.User.name}
                    rating={review.rating}
                    comment={review.comment}
                    data={formatDate(review.created_at)}
                    tourTitle={review.Tour.title}
                    image={review.Tour.img_url}
                />
            ))}

        </div>
    )

}