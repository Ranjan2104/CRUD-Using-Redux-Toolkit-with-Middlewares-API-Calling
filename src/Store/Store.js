import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './Slices/index';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware]
})