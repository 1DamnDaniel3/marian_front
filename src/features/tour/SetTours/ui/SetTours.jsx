import { TourCard } from '../../../../entities'
import { UseSetTours } from '../model/UseSetTours'
import s from './SetTours.module.css'

export const SetTours = ({ className }) => {

    const [groupedTours, error] = UseSetTours()


    return (
        <div className={className}>
            {Object.entries(groupedTours).map(([region, tours]) => (
                <div key={region}>
                    <h2 className={s.regionTitle}>{`Туры региона "${region}"`}</h2>
                    <div className={s.RegionTours}>
                        {tours.map(tour => (
                            <TourCard
                                key={tour.id}
                                image={tour.img_url}
                                title={tour.title}
                                duration={` ${tour.duration} дней`}
                                persons={` ${tour.persons} человек`}
                                description={tour.description}
                                price={tour.price}
                                children={"Забронировать"}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

};