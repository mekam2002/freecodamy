import { configureStore } from '@reduxjs/toolkit'
import courserReducer from './features/courseSlice'
import layoutReducer from './features/layoutSlice'
import authReducer from './features/authSlice'


export const store = configureStore({
    reducer: {
        course: courserReducer,
        layout: layoutReducer,
        auth: authReducer
    }
})

