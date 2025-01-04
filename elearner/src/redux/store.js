import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer.js';
import { profileReducer } from './reducers/profileReducer.js';

const store = configureStore({
  reducer:{
    user:userReducer
    // profile:profileReducer
  }
})

export default store;
