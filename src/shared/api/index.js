import { toursApi, activityApi, regionApi,
     customTourApi, reviewApi, userApi,
      applicationApi, tourActivitiesApi,
      contactsApi } from '../../entities'


export const APIs = {
    tour: toursApi,
    region: regionApi,
    activity: activityApi,
    custom: customTourApi,
    review: reviewApi,
    user: userApi,
    application: applicationApi,
    tourActivity: tourActivitiesApi,
    contacts: contactsApi,
}