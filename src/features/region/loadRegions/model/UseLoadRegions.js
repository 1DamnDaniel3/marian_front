import { useEffect, useState } from "react";
import { APIs } from "../../../../shared";

const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

export const UseLoadRegions = () => {
    
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        APIs.region.getRegions()
        .then(response => {

            const processedRegions = response.data.regions.map(region =>{
                const landmarks = region.Landmarks?.slice(0, 3).map(mark => mark.name) || [];

                const seasonPeriods = region.SeasonPeriods || [];
                const season = seasonPeriods.map(season => `
                    ${monthNames[season.start_month - 1]} - ${monthNames[season.end_month - 1]}`).join(', ');
                return {
                    ...region,
                    landmarks,
                    season,
                };
            });
    

            setRegions(processedRegions)

        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    },[])

    return {regions, loading, error}

}