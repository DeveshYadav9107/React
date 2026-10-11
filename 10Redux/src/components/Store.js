import { configureStore } from '@reduxjs/toolkit'
import reactSlicer1 from './Slicer1'

const store = configureStore({
    reducer : {
        slicer1 : reactSlicer1
    }
})

export default store
