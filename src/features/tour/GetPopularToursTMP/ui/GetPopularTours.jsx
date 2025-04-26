import { TourCard } from '../../../../entities';
import { UsePopularTours } from '../model/UsePopularTours';
import s from './GetPopularTours.module.css';

export const GetPopularTours = () => {
  const { tours, loading, error } = UsePopularTours();

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки туров</p>;

  return (
    <section className={s.section}>
      <h2 className={s.title}>Популярные туры</h2>
      <div className={s.grid}>
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            image={tour.img_url}
            title={tour.title}
            duration={tour.duration}
            price={tour.price}
          />
        ))}
      </div>
    </section>
  );
};
