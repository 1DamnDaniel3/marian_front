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

    return [tours, error]

};