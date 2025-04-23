import { api } from "../../../shared";

export const regionApi = {
    getRegions: async (data) => api.get('/regions', data),
    addRegion: async (data) => api.post('regions/registration', data)
}