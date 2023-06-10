import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getUserInput(_, action) {
      return action.payload;
    },
  },
});

export const { getUserInput } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
