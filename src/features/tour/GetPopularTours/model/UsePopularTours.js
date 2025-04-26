import { useEffect, useState } from 'react';
import { APIs } from '../../../../shared'

export const UsePopularTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    APIs.tour.getPopularTours()
      .then(response => {
        setTours(response.data)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { tours, loading, error };
};
