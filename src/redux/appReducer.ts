import { CART_LOADING  } from './types'


export const appReducer = ({state, action}: any) => {
  switch(action.type) {
    case CART_LOADING:
      return state
    default: 
      return state
  }
}



