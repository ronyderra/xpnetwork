import { configureStore } from '@reduxjs/toolkit'
import employeeTableReducer from './employeeSlice'
import employeeColumnSlice from './columnSlice'

export default configureStore({
    reducer: {
        employeeTable: employeeTableReducer,
        employeeColumn: employeeColumnSlice,
    },
})