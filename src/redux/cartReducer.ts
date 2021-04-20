import { CART_LOADING, GET_CART, PUT_CART, ADD_CART, CHANGE_COUNT_CART } from './types'

const initialState = {
  cart: [],
  cartLoading: false
}

export const cartReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case PUT_CART:   
      return {...state, cart: [...action.payload]}
    case CHANGE_COUNT_CART:   
      return {...state, cart: state.cart.map((prod: any) => {
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

