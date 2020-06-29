import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {CartReducer,AuthReducer} from './reducer.js'

export const Store= createStore(combineReducers({CartStore:CartReducer,AuthStore:AuthReducer}),applyMiddleware(thunk));
  