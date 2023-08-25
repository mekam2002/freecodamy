import { createSlice } from '@reduxjs/toolkit'


interface AuthState {
    isAuth: boolean
    userInfo?: {
        email?: string
        name?: string,
        birthDate?: string
    }

}
const initialState: AuthState = {
    isAuth: false,
    userInfo: {}

};

const authtSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {

        setAuth: (state, { payload }) => {
            state.isAuth = payload
        },
        setUserData: (state, { payload }) => {
            state.userInfo = payload
        }

    }
})

export const { setAuth, setUserData } = authtSlice.actions
export default authtSlice.reducer
