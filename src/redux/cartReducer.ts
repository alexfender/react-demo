import { TCartAction } from '../interfaces'
import { CART_LOADING, PUT_CART, CHANGE_COUNT_CART } from './types'

const initialState = {
  cart: [],
  cartLoading: false
}

export const cartReducer = (state = initialState, action: TCartAction) => {
  switch(action.type) {
    case PUT_CART:   
      return {...state, cart: [...action.payload]}
    case CHANGE_COUNT_CART:   
      return {...state, cart: state.cart.map((prod: {id: number, count: number}) => {
        if (prod.id===action.payload.id) {
          prod.count = action.payload.count
        }
        return prod
      })}
    case CART_LOADING: 
      return {...state, cartLoading: action.payload}
    default:
      return state
  }
}

