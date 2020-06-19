import {createStore} from 'redux'
import {CartReducer} from './reducer.js'

export const CartStore= createStore(CartReducer);
