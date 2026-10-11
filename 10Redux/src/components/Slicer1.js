import { createSlice } from '@reduxjs/toolkit'

const reactSlicer1 = createSlice({
    name : 'slicer1',
    initialState : {
        count : 0
    },
    reducers : {
        Increment : (state) =>{state.count = state.count+1},
        Decrement : (state) =>{state.count = state.count-1}
    }
})


export const {Increment, Decrement} = reactSlicer1.actions
export default reactSlicer1.reducer