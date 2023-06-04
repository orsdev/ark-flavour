import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  search: string
  diet: string
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    search: '',
    diet: ''
  } as FilterState,
  reducers: {
    _clearFilter: (state) => {
      state.search = '',
        state.diet = ''
    },
    _updateSearch: (state: FilterState, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    _updateDiet: (state: FilterState, action: PayloadAction<string>) => {
      state.diet = action.payload
    }
  }
})

export const { _clearFilter, _updateDiet, _updateSearch } = filterSlice.actions
export default filterSlice.reducer
