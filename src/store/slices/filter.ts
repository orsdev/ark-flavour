import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  search: string
  preference: string
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    search: '',
    preference: ''
  } as FilterState,
  reducers: {
    _clearFilter: (state) => {
      state.search = '',
        state.preference = ''
    },
    _updateSearch: (state: FilterState, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    _updatePreference: (state: FilterState, action: PayloadAction<string>) => {
      state.preference = action.payload
    }
  },
  extraReducers: {
  }
})

export const { _clearFilter, _updatePreference, _updateSearch } = filterSlice.actions
export default filterSlice.reducer
