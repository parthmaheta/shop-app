import {createStore, combineReducers} from 'redux'
import {CartReducer,AuthReducer} from './reducer.js'

export const CartStore= createStore(combineReducers({CartStore:CartReducer,AuthStore:AuthReducer}));
  