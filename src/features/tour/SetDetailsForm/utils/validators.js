export const validateDate = (dateString) => {
    if (!dateString) return false;
    
    // Разбиваем дату на компоненты (год, месяц, день)
    const [year, month, day] = dateString.split('-').map(Number);
    
    // Создаём даты без времени (используем только год, месяц, день)
    const selectedDate = new Date(year, month - 1, day);
    const today = new Date();
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    return selectedDate >= todayDate;
  };
  
  export const validateDatesOrder = (startDate, endDate) => {
    if (!startDate || !endDate) return false;
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    
    return end >= start;
  };
  
  export const validatePeopleCount = (value) => {
    const num = Number(value);
    return !isNaN(num) && num > 0 && num < 100 && /^\d+$/.test(value);
  };