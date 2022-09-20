import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {foodsApi} from './apiSlice'

export const store = configureStore({
  reducer: {
    [foodsApi.reducerPath]: foodsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      foodsApi.middleware,
    ),
})

setupListeners(store.dispatch)
