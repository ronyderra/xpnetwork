import { createSlice } from '@reduxjs/toolkit'
import employeeTableData from '../mock/emplyeesData'

const initialState = employeeTableData;
export const employeeTableSlice = createSlice({
    name: 'employeeTable',
    initialState,
    reducers: {
        addRow: (state, action) => {
            state.push(action.payload)
        },
    },
})

export const { addRow } = employeeTableSlice.actions
export default employeeTableSlice.reducer