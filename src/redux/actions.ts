import { CART_LOADING, GET_CART, PUT_CART, REMOVE_CART, ADD_CART, CHANGE_COUNT_CART } from './types'


export function cartLoading(payload: any) {
  return {
    type: CART_LOADING,
    payload
  }
}

export function getCart() {
  return {
    type: GET_CART
  }
}

export function removeCart(id: number) {
  return {
    type: REMOVE_CART,
    payload: id
  }
}

export function addCart(product: any) {
  return {
    type: ADD_CART,
    payload: product
  }
}

export function changeCountCart(id: number, count: number) {
  return {
    type: CHANGE_COUNT_CART,
    payload: {id, count}
  }
}

export function putCart(cart: any) {
  return {
    type: PUT_CART,
    payload: cart
  }
}


