import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import loggerMiddleware from '../middleware/logger'
import rootReducer from '../reducers'

// define what keys should be persisted using whitelist to not persist
// store keys that are not that useful
// user - keeps user information and is used to make authenticated calls
const persistConfig = {
  key: 'root',
  whitelist: ['user'],
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore(initialState = {}) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const composedEnhancers = composeWithDevTools(middlewareEnhancer)

  const store = createStore(persistedReducer, initialState, composedEnhancers)
  const persistor = persistStore(store)

  return { store, persistor }
}
