import { configureStore } from '@reduxjs/toolkit';
import recipeSlice from './recipeSlice.js';

const store = configureStore({
  reducer: {
    recipeReducer: recipeSlice,
  },
});

export default store;