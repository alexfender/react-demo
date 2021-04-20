import { put, call, takeEvery, StrictEffect} from 'redux-saga/effects'
import { getCart, removeCart, addCart, changeCountCart } from '../services/api'
import { GET_CART, PUT_CART, REMOVE_CART, ADD_CART, CHANGE_COUNT_CART } from './types'
import { cartLoading } from './actions'

export function* cartWatcher() {
  yield takeEvery(GET_CART, cartWorker)
  yield takeEvery(REMOVE_CART, cartRemoveWorker)
  yield takeEvery(ADD_CART, cartAddWorker)
  yield takeEvery(CHANGE_COUNT_CART, cartChangeCountWorker)
}

function* cartWorker(): Generator<StrictEffect, any, any> {
  yield put(cartLoading(true))
  try {
    const payload = yield call(getCart)
    yield put({type: PUT_CART, payload})
    yield put(cartLoading(false))
  } catch(e) {
    yield put(cartLoading(false))
  }
}

function* cartRemoveWorker(action: any): Generator<StrictEffect, any, any> {
  yield put(cartLoading(true))
  try {
    yield call(removeCart, action.payload)
    yield call(cartWorker)
  } catch(e) {

  }
}


function* cartAddWorker(action: any): Generator<StrictEffect, any, any> {
  try {
    yield call(addCart, action.payload)
    yield call(cartWorker)
  } catch(e) {

  }
}

function* cartChangeCountWorker(action: any): Generator<StrictEffect, any, any> {
  yield put(cartLoading(true))
  try {
    yield call(changeCountCart, action.payload)
    yield call(cartWorker)
  } catch(e) {

  }
}
