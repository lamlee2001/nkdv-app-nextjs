import { createSlice } from '@reduxjs/toolkit'; // PayloadAction

import { changeLanguage } from './i18n.action';
import { LANGUAGE } from '@/src/constants/config';

const { actions, reducer } = createSlice({
  name: 'i18n_slice',
  initialState: {
    language: LANGUAGE.VI,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(changeLanguage.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changeLanguage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.language = action.payload;
      })
      .addCase(changeLanguage.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export { reducer };
export default actions;
