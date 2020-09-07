import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';

const initialState = {};

const store = configureStore({ reducer: rootReducer, initialState });

export default store;
