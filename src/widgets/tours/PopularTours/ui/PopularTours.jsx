import { GetPopularTours } from "../../../../features"
import s from './PopularTours.module.css'

export const PopularTours = ({className, onClick, children, }) => {
    return (
        <div>
            <GetPopularTours
                className={`${s.button} ${className || ''} `}
                onClick={onClick}
                children={children}
                />
                
        </div>
    )
}