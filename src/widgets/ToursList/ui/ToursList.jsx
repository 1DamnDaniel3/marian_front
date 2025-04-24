import { SetTours } from '../../../features'
import s from './TourList.module.css'

export const ToursList = () => {
    return(
        <div className={s.TourList}>
            <SetTours/>
        </div>
    )
}