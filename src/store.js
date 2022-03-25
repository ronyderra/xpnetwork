import { configureStore } from '@reduxjs/toolkit'
import employeeTableReducer from './employeeSlicer'

export default configureStore({
    reducer: {
        employeeTable: employeeTableReducer
    },
})