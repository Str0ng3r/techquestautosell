import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './collectSlice';

const store = configureStore({
    reducer:mainReducer
})
export default store