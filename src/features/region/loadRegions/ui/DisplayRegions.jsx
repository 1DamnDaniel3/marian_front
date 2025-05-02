import { RegionCard } from "../../../../entities"
import { UseLoadRegions } from "../model/UseLoadRegions"
import s from './DisplayRegions.module.css'

export const DisplayRegions = ({onClick, children}) => {

    const { regions, loading, error } = UseLoadRegions();





    return (
        <div className={s.container}>
            {loading && <div className={s.loading}>Загрузка...</div>}
            {error && <div className={s.error}>Ошибка загрузки регионов</div>}
            {!loading && !error && regions.map((region) => (
                <RegionCard
                    key={region.id}
                    image={region.img_url}
                    name={region.name}
                    season={region.season}s
                    label={"Достопримечательности: "}
                    landmark1={region.landmarks[0]?.length > 0 && `•${region.landmarks[0]}`}
                    landmark2={region.landmarks[1]?.length > 0 && `•${region.landmarks[1]}`}
                    landmark3={region.landmarks[2]?.length > 0 && `•${region.landmarks[2]}`}
                    children={children}
                    onClick={()=>onClick(region.id, region.name)}
                />
            ))}
        </div>
    )
}