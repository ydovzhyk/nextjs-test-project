import { configureStore, Reducer } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistedState,
} from 'redux-persist';
import authReducer from './auth/auth-slice';
import technicalReducer from './technical/technical-slice';
import { IAuthStore } from '../types/store/store-auth';

const isServer = typeof window === 'undefined';

let storage;
if (!isServer) {
  storage = require('redux-persist/lib/storage').default;
}

const persistConfig = {
  key: 'auth-sid',
  storage,
  whitelist: ['sid', 'accessToken', 'refreshToken'],
};

type AuthState = IAuthStore & Partial<{ _persist: PersistedState }>;

const finalAuthReducer: Reducer<AuthState> = isServer
  ? (authReducer as unknown as Reducer<AuthState>)
  : (persistReducer(persistConfig, authReducer) as unknown as Reducer<AuthState>);

export const store = configureStore({
  reducer: {
    auth: finalAuthReducer,
    technical: technicalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = isServer ? null : persistStore(store);