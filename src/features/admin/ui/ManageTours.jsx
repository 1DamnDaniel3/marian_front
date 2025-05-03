import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ManageTours.module.css';
import { TCard } from '../../../entities';
import {
  fetchTours,
  deleteTour,
  selectAllTours,
  selectToursStatus,
  selectToursError,
  selectCurrentTour,
  setCurrentTour,
  clearCurrentTour
} from '../model/toursSlice';
import { TourForm } from './TourForm';
import { Modal } from '../../../shared';

export const ManageTours = () => {
  const dispatch = useDispatch();
  const tours = useSelector(selectAllTours);
  const status = useSelector(selectToursStatus);
  const error = useSelector(selectToursError);
  const currentTour = useSelector(selectCurrentTour);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Загружаем туры при монтировании компонента
  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const handleCreate = () => {
    dispatch(clearCurrentTour());
    setIsModalOpen(true);
  };

  const handleEdit = (tour) => {
    dispatch(setCurrentTour(tour));
    setIsModalOpen(true);
  };

  const handleDelete = (tourId) => {
    if (window.confirm('Вы уверены, что хотите удалить этот тур?')) {
      dispatch(deleteTour(tourId));
    }
  };

  const handleSubmit = (tourData) => {
    setIsModalOpen(false);
    // Здесь форма сама отправит данные через Redux
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    dispatch(clearCurrentTour());
  };

  // Отображаем состояние загрузки
  if (status === 'loading') {
    return <div className={s.loading}>Загрузка...</div>;
  }

  // Отображаем ошибку, если есть
  if (status === 'failed') {
    return <div className={s.error}>Ошибка: {error}</div>;
  }

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1 className={s.title}>Управление турами</h1>
        <button 
          className={s.addButton}
          onClick={handleCreate}
        >
          + Добавить тур
        </button>
      </div>
      
      {tours.length === 0 ? (
        <div className={s.empty}>Нет доступных туров</div>
      ) : (
        <div className={s.toursGrid}>
          {tours.map(tour => (
            <TCard 
              key={tour.id} 
              tour={tour} 
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <TourForm 
          initialValues={currentTour} 
          onSubmit={handleSubmit} 
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
};