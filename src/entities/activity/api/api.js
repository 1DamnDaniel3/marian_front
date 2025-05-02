import { api } from "../../../shared";

export const activityApi = {

    getActivities: async (data) => api.get('/activities', data),
    RegionActivities: async (region_id) => api.post('/regionActivities', { region_id }),

}