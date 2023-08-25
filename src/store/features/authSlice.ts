import { createSlice } from '@reduxjs/toolkit'


interface AuthState {
    isAuth: boolean
    email?: string
    name?: string,
    birthDate?: string

}
const initialState: AuthState = {
    isAuth: false,
    email: "",
    name: "",
    birthDate: ""
};

const authtSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {

        setAuth: (state, { payload }) => {
            state.isAuth = payload
        },

    }
})

export const { setAuth } = authtSlice.actions
export default authtSlice.reducer
