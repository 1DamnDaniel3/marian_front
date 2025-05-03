import { data } from 'react-router-dom'
import { logout } from '../../../features'
import { api } from '../../../shared/api/base'

export const userApi = {

    login: async (data) => api.post('/users/login', data),
    logout: async (data) => api.post('users/logout', data),
    authCheck: async (data) => api.get('/auth/check', data),

    getUsers: async (data) => api.get('/users', data),
    deleteUsers: async (id) => api.delete(`/users/${id}`),
    updateUsers: async (id, data) => api.put(`/users/${id}`, data),
    

}