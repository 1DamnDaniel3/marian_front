import { useState } from 'react';
import { TourCard } from '../../../../entities';
import { UseSetTours } from '../model/UseSetTours';
import { ApplicationModal } from './ApplicationModal';
import { APIs } from '../../../../shared';
import s from './SetTours.module.css';

export const SetTours = ({ className }) => {
  const [groupedTours, error] = UseSetTours();
  const [selectedTour, setSelectedTour] = useState(null);

  const handleBookClick = (tour) => {
    setSelectedTour(tour);
  };

  const handleCloseModal = () => {
    setSelectedTour(null);
  };

  const handleSubmitApplication = async (formData) => {
    try {
      await APIs.application.addApplication(formData);
      alert('Заявка успешно отправлена!');
      handleCloseModal();
    } catch (error) {
      console.error('Ошибка при отправке заявки:', error);
      alert('Произошла ошибка при отправке заявки');
    }
  };

  return (
    <div className={className}>
      {Object.entries(groupedTours).map(([region, tours]) => (
        <div key={region}>
          <h2 className={s.regionTitle}>{`Туры региона "${region}"`}</h2>
          <div className={s.RegionTours}>
            {tours.map(tour => (
              <TourCard
                key={tour.id}
                image={tour.img_url}
                title={tour.title}
                duration={` ${tour.duration} дней`}
                persons={` ${tour.persons} человек`}
                description={tour.description}
                price={tour.price}
                children={"Забронировать"}
                onClick={() => handleBookClick(tour)}
              />
            ))}
          </div>
        </div>
      ))}
      
      {selectedTour && (
        <ApplicationModal
          tour={selectedTour}
          onClose={handleCloseModal}
          onSubmit={handleSubmitApplication}
        />
      )}
    </div>
  );
};