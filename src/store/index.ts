import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { Reducer } from 'redux';

import { productsAPI } from 'services/ProductsService';


export const store = configureStore({
  reducer: {
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(
        productsAPI.middleware,
      ),
  devTools: process.env.NODE_ENV === 'development'
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
