// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, combineReducers } from 'redux';
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   contacts: phoneBookReducer,
// });
// export const store = createStore(rootReducer, composeWithDevTools());

import phoneBookReducer from './phonebook/phonebook-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
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

// const persistConfig = {
//   key: 'subscribers',
//   storage,
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
]; // логирует экшн

const contactPersistConfig = {
  key: 'subscriber',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactPersistConfig, phoneBookReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development', // Отключить девтулзы для общего пользования
});

const persistor = persistStore(store);

export { store, persistor };
