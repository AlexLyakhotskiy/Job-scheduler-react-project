import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sprintSlice from './sprint/sprin-slice';
import allProjectsReducers from './projects/projectReducer';
import authReducer from './auth/auth-reducer';
import { userSettingsReducer } from './userSettings/userSettingsReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['user', 'refreshToken', 'sid'],
};

const persistConfigUserSettings = {
  key: 'userSettings',
  storage,
  whitelist: ['language'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfigAuth, authReducer),
    userSettings: persistReducer(
      persistConfigUserSettings,
      userSettingsReducer,
    ),
    sprints: sprintSlice,
    projects: allProjectsReducers,
    tasks: () => '',
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
