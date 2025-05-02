import { useDispatch, useSelector } from 'react-redux'
import { selectSelectedActivities, selectSelectedRegion, selectTravelDetails } from '../model/CustomSelectors'
import { Button } from '../../../shared'
import { submitCutomTour } from '../model/api'
import s from './Request.module.css'
import { stepUp } from '../model/CustomSlice'

export const Request = ({ className }) => {

    const dispatch = useDispatch();

    const selectedRegion = useSelector(selectSelectedRegion)
    const selectedAvtivities = Object.values(useSelector(selectSelectedActivities))
    const details = useSelector(selectTravelDetails)

    const tourData = {
            user_id: 1, // ПОДСТАВИТЬ ПАРАМЕТР
            region_id: selectedRegion.id,
            comfort_level_id: 1,    // ПОДСТАВИТЬ ПАРАМЕТР
            start_date: details.dates.start,
            end_date: details.dates.end,
            persons_count: details.people,
            additional_wishes: details.wishes,
    }


    return (

        <div className={`${s.request} ${s.className || ''}`}>

            <div className={s.content}>

                <h1>Проверим информацию:</h1>
                <h3>{`Регион: "${selectedRegion.name}"`}</h3>
                <h3>{`Даты: ${details.dates.start} - ${details.dates.end}`}</h3>
                <h3>{`Участники: ${details.people} чел.`}</h3>
                <h3>{`Уровень комфорта: ${details.serviceClass}`}</h3>
                <h3>Активности:</h3>
                {selectedAvtivities.map(activity => (
                    <p key={activity.id}>{activity.name}</p>

                )
                )}
                <h3>{`Комментарий: ${details.wishes}`}</h3>

                <Button
                    onClick={()=> {dispatch(submitCutomTour(tourData))
                        dispatch(stepUp(1))
                    }}
                    className={s.button}
                    children={"Отправить заявку"}
                />


            </div>


        </div>

    )

}