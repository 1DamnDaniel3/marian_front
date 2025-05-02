import { TourCard } from '../../../../entities';
import { UsePopularTours } from '../model/UsePopularTours';
import s from './GetPopularTours.module.css';

export const GetPopularTours = ({className, onClick, children, description}) => {
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
            duration={` ${tour.duration} дней`}
            persons={` ${tour.persons} человек`}
            price={tour.price}

            description = {tour.description}
            className={`${s.button} ${className || ''} `}
            onClick={onClick}
            children={children} />
        ))}
      </div>
    </section>
  );
};
