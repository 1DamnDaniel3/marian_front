export { FindTour, GetPopularTours, SetTours, SetDetails } from './tour'
export { DisplayRegions } from './region'
export { SetActivities, activitiesReducer } from './activity'
export { SetReviews, reviewReducer, toggleCreating } from './review'
export {
    RegisterForm, registerReducer, registerApi, registerSuccess,
    LoginForm, loginReducer, loginApi, loginSuccess, logout
} from './authentication'
export {
    SetUsers, usersReducer
} from './user'
export {ManageTours, toursReducer} from './admin'
export { SetContactsForm } from './contacts'
