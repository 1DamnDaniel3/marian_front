import { stepUp } from '../../../../pages';
import { validateDate, validateDatesOrder, validatePeopleCount } from '../utils/validators';

export const useFormHandlers = (formData, setFormData, setErrors, dispatch, setTravelDetails) => {
    const submitValidate = () => {
        const newErrors = {
            startDate: !formData.startDate
                ? 'Укажите дату начала'
                : validateDate(formData.startDate)
                    ? ''
                    : 'Некорректная дата начала',
            endDate: !formData.endDate
                ? 'Укажите дату окончания'
                : validateDatesOrder(formData.startDate, formData.endDate)
                    ? ''
                    : 'Дата окончания должна быть позже начала',
            peopleCount: !formData.peopleCount
                ? 'Укажите количество человек'
                : validatePeopleCount(formData.peopleCount)
                    ? ''
                    : 'Введите число от 1 до 99',
            serviceClass: !formData.serviceClass
                ? 'Выберите уровень комфорта'
                : ''
        };

        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error !== '');
    };

    const handleSubmit = () => {
        if (submitValidate()) {
            dispatch(setTravelDetails({ // Используем прямое обращение к экшену
                dates: {
                    start: formData.startDate,
                    end: formData.endDate
                },
                people: Number(formData.peopleCount),
                wishes: formData.wishes,
                serviceClass: formData.serviceClass
            }));
            dispatch(stepUp(1));
            return true; 
        }
        return false;
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Валидация при изменении
        if (name === 'startDate') {
            setErrors(prev => ({
                ...prev,
                startDate: validateDate(value) ? '' : 'Некорректная дата начала',
                endDate: formData.endDate && !validateDatesOrder(value, formData.endDate)
                    ? 'Дата окончания должна быть позже начала'
                    : ''
            }));
        }

        if (name === 'endDate') {
            setErrors(prev => ({
                ...prev,
                endDate: validateDatesOrder(formData.startDate, value)
                    ? ''
                    : 'Дата окончания должна быть позже начала'
            }));
        }

        if (name === 'peopleCount') {
            setErrors(prev => ({
                ...prev,
                peopleCount: validatePeopleCount(value)
                    ? ''
                    : 'Введите число от 1 до 99'
            }));
        }
    };

    return { handleChange, handleSubmit };
};