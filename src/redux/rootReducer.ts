import { combineReducers } from 'redux'
//import { appReducer } from './appReducer'
import { cartReducer } from './cartReducer'

export const rootReducer = combineReducers({
  cart: cartReducer
})