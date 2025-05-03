export const validateDate = (dateString) => {
    if (!dateString) return false;
    const [year, month, day] = dateString.split('-').map(Number);
    const selectedDate = new Date(year, month - 1, day);
    const today = new Date();
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return selectedDate >= todayDate;
};

export const validatePeopleCount = (value) => {
    const num = Number(value);
    return !isNaN(num) && num > 0 && num <= 100 && /^\d+$/.test(value);
};

export const getValidateForm = (setErrors) => (formData) => {
    const newErrors = {
        travel_date: !formData.travel_date
            ? 'Укажите дату путешествия'
            : validateDate(formData.travel_date)
                ? ''
                : 'Дата должна быть сегодня или позднее',
        persons_count: !formData.persons_count
            ? 'Укажите количество человек'
            : validatePeopleCount(formData.persons_count)
                ? ''
                : 'Введите число от 1 до 100',
        payment_method: !formData.payment_method ? 'Выберите способ оплаты' : ''
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
};