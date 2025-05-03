import { api } from "../../../shared";

export const tourActivitiesApi = {

    fetchTourActivities: async (data) => api.get('/tourActivities', data),

    addTourActivities: (data) => api.post('tourActivities/registration', data),
    updateTourActivities: (tour_id, activitiesData) => 
        api.post(`tourActivities/update/${tour_id}`, activitiesData),            

}