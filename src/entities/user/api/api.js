import { api } from '../../../shared/api/base'

export const userApi = {

    login: async (data) => api.post('/users/login', data),
    authCheck: async (data) => api.get('/auth/check', data)

}