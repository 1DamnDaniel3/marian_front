import { api } from "../../../shared";

export const customTourApi = {

    createRequest: async (data) => api.post('customTours/registration', data)

}