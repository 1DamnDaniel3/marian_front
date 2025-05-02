import { ActivityCard } from '../../../../entities'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { fetchActivities } from '../model/activitiesSlice'
import { selectSelectedActivities, toggleActivity } from '../../../../pages'
import { selectActivitiesError, selectActivitiesList, selectActivitiesLoading } from '../model/activitiesSelectors'
import { selectSelectedRegion } from '../../../../pages'

import s from './SetActivities.module.css'

export const SetActivities = () => {

    const selectedRegion = useSelector(selectSelectedRegion).id;
    const selected = Object.values(useSelector(selectSelectedActivities)).map(activityID => activityID.id)

    const dispatch = useDispatch();
    const activities = useSelector(selectActivitiesList)


    const loading = useSelector(selectActivitiesLoading)
    const error = useSelector(selectActivitiesError)


    useEffect(() => {
        if (selectedRegion) {
            dispatch(fetchActivities(selectedRegion));

        }
    }, [dispatch, selectedRegion])


    return (
        <div className={s.activitiesWrapper}>

            {activities.map(activity => (

                <ActivityCard
                    key={activity.id}
                    onClick={() => dispatch(toggleActivity({ id: activity.id, name: activity.name }))}
                    className={`${s.card} ${selected.includes(activity.id) ? s.selected : ''}`}
                    children={activity.name} />
            ))}
        </div>
    )

}