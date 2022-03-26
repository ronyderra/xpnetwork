import { configureStore } from '@reduxjs/toolkit'
import employeeTableReducer from './employeeSlice'

export default configureStore({
    reducer: {
        employeeTable: employeeTableReducer
    },
})