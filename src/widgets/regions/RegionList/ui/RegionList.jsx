import { DisplayRegions } from '../../../../features'
import s from './RegionList.module.css'

export const RegionList = ({onClick, children}) => {
    return (
        <div className={s.RegionList}>
            <h1 className={s.title}>Направления для путешествий</h1>
            <DisplayRegions onClick={onClick} children={children} />

        </div>
    )
}