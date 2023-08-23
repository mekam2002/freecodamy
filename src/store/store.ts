import { configureStore } from '@reduxjs/toolkit'
import courserReducer from './features/courseSlice'


export const store = configureStore({
    reducer: {
        course: courserReducer
    }
})

