import { useEffect, useState } from 'react';
import {APIs} from '../../../../shared'

export const usePopularTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    APIs.tour.getPopularTours()
      .then(responce => {
        setTours(responce.data)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { tours, loading, error };
};
