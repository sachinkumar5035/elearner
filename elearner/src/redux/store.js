import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer.js';


// const server="backend server link"; // needs to be deployed

const store = configureStore({
  reducer:{
    user:userReducer,
  }
})

export default store
