import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';
// this is the global state by redux
const store = configureStore({
  reducer: {
    books: bookReducer
  }
});

export default store;
