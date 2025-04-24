import {api} from '../../../shared'

export const toursApi = {
    getPopularTours: async (data) => api.get('/getPopularTours', data),
    getTours: async (data) => api.get('/tours', data),
}