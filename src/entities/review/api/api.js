import { api } from '../../../shared'

export const reviewApi = {

    getAllReviews: async (data) => api.get('/reviews', data),
    addReview: async (data) => api.post('/reviews/registration', data)

}