// store.js

import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootreduce';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // Enable Redux DevTools only in development
});

export default store;
