import { configureStore } from '@reduxjs/toolkit'
import employeeTableReducer from './employeeSlice'
import employeeColumnSlice from './columnSlice'

export const store =  configureStore({
    reducer: {
        employeeTable: employeeTableReducer,
        employeeColumn: employeeColumnSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch