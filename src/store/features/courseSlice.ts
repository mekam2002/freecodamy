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

interface ChildrenType {
    title: string,
    description: string,
    imagePath: number,
    codeBlock: number,
    children: any[]
}

export interface CourseDetailsType {
    courseId: string;
    title: string;
    course: ChildrenType[]
}

interface CoursState {
    data: CourseType[],
    details: CourseDetailsType | null,
    loadingDetails: boolean,
    errorDetails: any
    loading: boolean

}
const initialState: CoursState = {
    data: [],
    loading: false,
    details: null,
    loadingDetails: false,
    errorDetails: null
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
        setLoadingDetailsSlice: (state, { payload }) => {
            state.loadingDetails = payload
        },
        setErrorDetailsSlice: (state, { payload }) => {
            state.errorDetails = payload
        },
        setDataDetails: (state, { payload }) => {
            state.details = payload
            console.log(state.details)
        },

    }
})

export const { setData, setLoadingSlice, setLoadingDetailsSlice, setDataDetails, setErrorDetailsSlice } = courserSlice.actions
export default courserSlice.reducer
