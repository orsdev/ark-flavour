import { combineReducers } from '@reduxjs/toolkit'
import filterSlice from './slices/filter'

const rootReducer = combineReducers({
  filter: filterSlice
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
