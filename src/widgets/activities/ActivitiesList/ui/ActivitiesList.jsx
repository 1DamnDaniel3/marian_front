import { useDispatch } from 'react-redux'
import { SetActivities } from '../../../../features'
import { Button } from '../../../../shared'
import s from './ActivitiesList.module.css'
import { stepDown, stepUp } from '../../../../pages'


export const ActivitiesList = () => {

    const dispatch = useDispatch();

    return (
        <div className={s.ActivitiesList}>
            <h1>Выберите активности</h1>
            <SetActivities />
            <div className={s.buttonPanel}>

                <Button
                    onClick={() => { dispatch(stepDown(1)) }}
                    children={"Назад"} />
                <Button
                    onClick={() => { dispatch(stepUp(1)) }}
                    children={"Далее"} />

            </div>

        </div>
    )

}