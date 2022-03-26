import { createSlice } from '@reduxjs/toolkit'
import employeeColumnData from '../mock/employeeColumnData'

const initialState = employeeColumnData;
export const employeeColumnSlice = createSlice({
    name: 'employeeColumnSlice',
    initialState,
    reducers: {
        addRow: (state, action) => {
            state.push(action.payload)
        },
    },
})

export const { addRow } = employeeColumnSlice.actions
export default employeeColumnSlice.reducer