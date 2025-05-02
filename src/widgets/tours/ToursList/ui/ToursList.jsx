import { SetTours } from '../../../../features'
import s from './ToursList.module.css'

export const ToursList = () => {
    return (
        <div className={s.ToursList}>
            <SetTours className={s.SetTours} />
        </div>
    )
}