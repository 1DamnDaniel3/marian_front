import { TourCard } from '../../../../entities'
import { UseSetTours } from '../model/UseSetTours'
import s from './SetTours.module.css'

export const SetTours = () => {

    const [tours, error] = UseSetTours()
    

    return(
        <div className={s.SetTours}>
            {tours.map(tour => 
                <TourCard
                key={tour.id}
                image = {tour.img_url}
                title = {tour.title}
                duration = {`🕓${tour.duration} дней`}
                persons = {`𐀪𐀪 ${tour.persons} человек`}
                description = {tour.description}
                price = {tour.price}
                children = {"Забронировать"}
                />
            )}
            
        </div>
    )
}