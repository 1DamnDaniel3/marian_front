import {api} from '../../../shared'

export const contactsApi = {

    postContacts: async (data) => api.post('/contacts/registration', data),

}