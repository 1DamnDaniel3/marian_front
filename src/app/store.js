import { configureStore } from '@reduxjs/toolkit'
import { activitiesReducer, reviewReducer, registerReducer, loginReducer } from '../features'
import { authenticateReducer } from '../widgets'
import authReducer from './model/authSlice'
import { CustomReducer } from '../pages'


export const store = configureStore({
    reducer: {
        activities: activitiesReducer,
        customTours: CustomReducer,
        reviews: reviewReducer,
        login: loginReducer,
        register: registerReducer,
        authenticate: authenticateReducer,
        auth: authReducer,

    }
})
