import { createSlice } from '@reduxjs/toolkit'


export interface CourseType {
    id?: string | number;
    course?: any;
    description?: string;
    duration?: number;
    title?: string;
    type?: string;
    courseId?: string
    rating?: number
    tags?: string[]
}

interface CoursState {
    data: CourseType[]
    loading: boolean

}
const initialState: CoursState = {
    data: [],
    loading: false,
};

const courserSlice = createSlice({
    name: 'course',
    initialState: initialState,
    reducers: {
        setData: (state, { payload }) => {
            state.data = payload
        },
        setLoadingSlice: (state, { payload }) => {
            state.loading = payload
        },

    }
})

export const { setData, setLoadingSlice } = courserSlice.actions
export default courserSlice.reducer
