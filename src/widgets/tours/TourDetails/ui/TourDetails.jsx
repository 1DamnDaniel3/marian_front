import { SetDetails } from '../../../../features'
import s from './TourDetails.module.css'



export const TourDetails = ({className}) => {

    return (

        <div className={`${s.TourDetails} ${className || ''}`}>
            <h1> Уточните детали тура </h1>
            <SetDetails className={s.Details}/>
            
        </div>

    )

}