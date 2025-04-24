import { DisplayRegions } from '../../../features'
import s from './RegionList.module.css'

export const RegionList = () => {
    return (
        <div className={s.RegionList}>
            <h1 className={s.title}>Направления для путешествий</h1>
            <DisplayRegions />

        </div>
    )
}