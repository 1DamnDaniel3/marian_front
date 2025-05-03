import {api} from '../../../shared'

export const toursApi = {
    getPopularTours: async (data) => api.get('/getPopularTours', data),
    
    getTours: async (data) => api.get('/tours', data),
    addTours: async (data) => api.post('/tours/registration', data),
    deleteTours: async (id) => api.delete(`/tours/${id}`),
    updateTours: async (id, data) => api.put(`/tours/${id}`, data, console.log(data)),
}