import { createSlice } from '@reduxjs/toolkit'


interface LayoutState {
    open: boolean

}
const initialState: LayoutState = {
    open: false,
};

const layoutSlice = createSlice({
    name: 'layout',
    initialState: initialState,
    reducers: {

        setDrawer: (state, { payload }) => {
            state.open = payload
            console.log(state.open);

        },

    }
})

export const { setDrawer } = layoutSlice.actions
export default layoutSlice.reducer
