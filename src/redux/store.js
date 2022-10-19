import {configureStore} from '@reduxjs/toolkit';
import ManagerSlice from './ManagerSlice';

export const store = configureStore({
    reducer: {
      sitedata: ManagerSlice,
    },
  });