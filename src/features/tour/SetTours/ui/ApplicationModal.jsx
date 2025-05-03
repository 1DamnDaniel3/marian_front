import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../../../../shared';
import s from './ApplicationModal.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../app/model/authSlice';
import { validateDate, validatePeopleCount, getValidateForm } from '../utils/validators';
import { APIs } from '../../../../shared';


export const ApplicationModal = ({ tour, onClose, onSubmit }) => {
  const modalRef = useRef(null);
  const user = useSelector(selectUser);
  const [errors, setErrors] = useState({
    travel_date: '',
    persons_count: '',
    payment_method: ''
  });

  // Создаем функцию validateForm с уже переданными tour и setErrors
  const validateForm = getValidateForm(setErrors);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      user_id: user.id,
      tour_id: tour.id,
      travel_date: e.target.travel_date.value,
      persons_count: e.target.persons_count.value,
      wishes: e.target.wishes.value,
      payment_method: e.target.payment_method.value,
    };

    if (validateForm(formData)) {
      try {
        const response = APIs.application.addApplication(formData);
        alert("Заявка отправлена!")
        onClose(); 
      } catch (error) {
        console.error('Ошибка при отправке:', error);
        setErrors(prev => ({...prev, form: 'Ошибка при отправке заявки'}));
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Валидация при изменении
    if (name === 'travel_date') {
      setErrors(prev => ({
        ...prev,
        travel_date: validateDate(value) ? '' : 'Дата должна быть сегодня или позднее'
      }));
    }

    if (name === 'persons_count') {
      setErrors(prev => ({
        ...prev,
        persons_count: validatePeopleCount(value, tour.persons)
          ? ''
          : `Введите число от 1 до 100`
      }));
    }

    if (name === 'payment_method') {
      setErrors(prev => ({
        ...prev,
        payment_method: value ? '' : 'Выберите способ оплаты'
      }));
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return createPortal(
    <div className={s.modalOverlay}>
      <div ref={modalRef} className={s.modal}>
        <button className={s.closeButton} onClick={onClose}>×</button>
        <h2>Бронирование тура: {tour.title}</h2>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <div className={s.formGroup}>
            <label>Дата путешествия:</label>
            <input
              type="date"
              name="travel_date"
              required
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.travel_date && <span className={s.error}>{errors.travel_date}</span>}
          </div>
          <div className={s.formGroup}>
            <label>Количество человек:</label>
            <input
              type="number"
              name="persons_count"
              min="1"
              max="100"
              defaultValue="1"
              required
            />
            {errors.persons_count && <span className={s.error}>{errors.persons_count}</span>}
          </div>
          <div className={s.formGroup}>
            <label>Пожелания:</label>
            <textarea name="wishes" rows="3" />
          </div>
          <div className={s.formGroup}>
            <label>Способ оплаты:</label>
            <select name="payment_method" required>
              <option value="">Выберите способ оплаты</option>
              <option value="Наличные">Наличные</option>
              <option value="Карта">Банковская карта</option>
              <option value="Перевод">Банковский перевод</option>
            </select>
            {errors.payment_method && <span className={s.error}>{errors.payment_method}</span>}
          </div>
          <Button type="submit" className={s.submitButton}>Отправить заявку</Button>
        </form>
      </div>
    </div>,
    document.body
  );
};