import { api } from "../../../shared";

export const applicationApi = {

    addApplication: async (data) => api.post('/applications/registration', data),

}