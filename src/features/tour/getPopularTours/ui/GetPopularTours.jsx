import { TourCard } from '@/entities/tour/ui/TourCard';
import { usePopularTours } from '../model/usePopularTours';
import s from './GetPopularTours.module.css';

export const GetPopularTours = () => {
  const { tours, loading, error } = usePopularTours();

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки туров</p>;

  return (
    <section className={s.section}>
      <h2 className={s.title}>Популярные туры</h2>
      <div className={s.grid}>
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            image={tour.image}
            title={tour.title}
            duration={tour.duration}
            price={tour.price}
          />
        ))}
      </div>
    </section>
  );
};
