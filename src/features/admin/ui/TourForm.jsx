import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createTour, updateTour } from '../model/toursSlice';
import s from './TourForm.module.css';
import { fetchRegions, selectAllRegions } from '../../../entities/region/model/regionSlice';
import {
    fetchTourActivities, selectTourActivities,
    updateTourActivities, addTourActivities
} from '../../../entities/tourActivities/model/tourActivitiesSlice';
import { selectAllActivities } from '../../activity/SetActivities/model/activitiesSelectors';
import { fetchAllActivities } from '../../activity/SetActivities/model/activitiesSlice';

export const TourForm = ({ initialValues, onSubmitSuccess, onCancel }) => {
    const dispatch = useDispatch();
    const activities = useSelector(selectAllActivities);
    const regions = useSelector(selectAllRegions);
    const tourActivities = useSelector(selectTourActivities);

    const [formData, setFormData] = useState({
        title: initialValues?.title || '',
        description: initialValues?.description || '',
        price: initialValues?.price || '',
        region_id: initialValues?.region_id || '',
        is_ready: initialValues?.is_ready || false,
        comfort_level_id: initialValues?.comfort_level_id || '',
        img_url: initialValues?.img_url || '',
        persons: initialValues?.persons || '',
        duration: initialValues?.duration || '',
        activities: []
    });

    useEffect(() => {
        dispatch(fetchRegions());
        dispatch(fetchAllActivities());
        if (initialValues?.id) {
            dispatch(fetchTourActivities());
        }
    }, [dispatch, initialValues?.id]);

    useEffect(() => {
        if (initialValues?.id && tourActivities.length > 0) {
            // Фильтруем активности только для текущего тура
            const currentTourActivities = tourActivities
                .filter(ta => ta.tour_id === initialValues.id)
                .map(ta => ta.activity_id);

            setFormData(prev => ({
                ...prev,
                activities: currentTourActivities
            }));
        }
        else if (initialValues?.activities?.length > 0) {
            // Используем активности из initialValues, если они есть
            setFormData(prev => ({
                ...prev,
                activities: initialValues.activities
            }));
        }
    }, [tourActivities, initialValues]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleActivityChange = (activityId) => {
        setFormData(prev => {
            const newActivities = prev.activities.includes(activityId)
                ? prev.activities.filter(id => id !== activityId)
                : [...prev.activities, activityId];
            return { ...prev, activities: newActivities };
        });
    };

    // =====================================================SUMBIT
    const handleSubmit = async (e) => {
        e.preventDefault();
        const tourData = {
            ...formData,
            price: parseFloat(formData.price),
            duration: parseInt(formData.duration)
        };

        try {
            if (initialValues?.id) {
                // 1. Обновляем данные тура
                await dispatch(updateTour({
                    id: initialValues.id,
                    tourData: {  // Явно указываем поле tourData
                      ...formData,
                      price: parseFloat(formData.price),
                      duration: parseInt(formData.duration)
                    }
                  })).unwrap();

                // 2. Формируем данные для активностей в нужном формате
                const activitiesData = formData.activities.map(activityId => ({
                    activity_id: activityId // Только ID активности
                }));

                // 3. Отправляем на сервер
                await dispatch(updateTourActivities({
                    tour_id: initialValues.id, // ID тура отдельным параметром
                    activitiesData // Массив объектов с activity_id
                })).unwrap();
            } else {
                dispatch(createTour(tourData)).then((action) => {
                    if (action.payload?.id && formData.activities.length > 0) {
                        const activitiesData = formData.activities.map(activityId => ({
                            tour_id: action.payload.id,
                            activity_id: activityId
                        }));
                        dispatch(addTourActivities(activitiesData));
                    }
                });
            }

            onSubmitSuccess?.();
        } catch (error) {
            console.error('Ошибка сохранения:', error);
            // Можно добавить обработку ошибок в UI
        }
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.formGroup}>
                <label>Название тура</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={s.formGroup}>
                <label>Описание</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={s.formGroup}>
                <label>Цена</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    required
                />
            </div>

            <div className={s.formGroup}>
                <label>Регион</label>
                <select
                    name="region_id"
                    value={formData.region_id}
                    onChange={handleChange}
                    required
                >
                    <option value="">Выберите регион</option>
                    {regions.map(region => (
                        <option key={region.id} value={region.id}>
                            {region.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className={s.formGroup}>
                <label>
                    <input
                        type="checkbox"
                        name="is_ready"
                        checked={formData.is_ready}
                        onChange={handleChange}
                    />
                    Готов к публикации
                </label>
            </div>

            <div className={s.formGroup}>
                <label>Уровень комфорта</label>
                <select
                    name="comfort_level_id"
                    value={formData.comfort_level_id}
                    onChange={handleChange}
                    required
                >
                    <option value="">Выберите уровень комфорта</option>
                    <option value="1">Базовый</option>
                    <option value="2">Стандартный</option>
                    <option value="3">Премиум</option>
                </select>
            </div>

            <div className={s.formGroup}>
                <label>URL изображения</label>
                <input
                    type="text"
                    name="img_url"
                    value={formData.img_url}
                    onChange={handleChange}
                />
            </div>

            <div className={s.formGroup}>
                <label>Количество человек</label>
                <input
                    type="text"
                    name="persons"
                    value={formData.persons}
                    onChange={handleChange}
                    placeholder="Например: 1-4"
                />
            </div>

            <div className={s.formGroup}>
                <label>Длительность (дни)</label>
                <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    min="1"
                    required
                />
            </div>

            <div className={s.formGroup}>
                <label>Активности</label>
                <div className={s.activitiesGrid}>
                    {activities.map(activity => (
                        <div key={activity.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={formData.activities.includes(activity.id)}
                                    onChange={() => handleActivityChange(activity.id)}
                                />
                                {activity.name}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className={s.formActions}>
                <button type="button" onClick={onCancel}>
                    Отмена
                </button>
                <button type="submit">
                    {initialValues?.id ? 'Обновить тур' : 'Создать тур'}
                </button>
            </div>
        </form>
    );
};