import { useEffect, useState } from "react";
import { APIs } from "../../../../shared";


export const UseSetTours = () => {

    const [tours, setTours] = useState([])
    const [error, setError] = useState(null)
    


    useEffect(() => {

        APIs.tour.getTours()
            .then(response => {
                setTours(response.data)
            })
            .catch((err) => {
                setError(err.message)
            })
    },[]);


    const groupedTours = tours.reduce((acc, tour) => {
            const regionName = tour.Region.name;
            if (!acc[regionName]) {
                acc[regionName] = [];
            }
            acc[regionName].push(tour);
            return acc;
        }, {});

    return [groupedTours, error]

};