import { put, call, takeEvery, StrictEffect} from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { getCart, removeCart, addCart, changeCountCart } from '../services/api'
import { GET_CART, PUT_CART, REMOVE_CART, ADD_CART, CHANGE_COUNT_CART } from './types'

import { cartLoading } from './actions'
import { IAddCartAction, IChangeCountCartAction, IRemoveCartAction } from '../interfaces'

export function* cartWatcher() {
  yield takeEvery(GET_CART, cartWorker)
  yield takeEvery(REMOVE_CART, cartRemoveWorker)
  yield takeEvery(ADD_CART, cartAddWorker)
  yield takeEvery(CHANGE_COUNT_CART, cartChangeCountWorker)
}

function* cartWorker(): Generator<StrictEffect> {
  yield put(cartLoading(true))
  try {
    const payload = yield call(getCart)
    yield put({type: PUT_CART, payload})
    yield put(cartLoading(false))
  } catch(e) {
    yield put(cartLoading(false))
    toast.error('Что то пошло не так')
  }
}

function* cartRemoveWorker({ payload }: IRemoveCartAction): Generator<StrictEffect> {
  yield put(cartLoading(true))
  try {
    yield call(removeCart, payload)
    yield call(cartWorker)
  } catch(e) {
    yield put(cartLoading(true))
    toast.error('Что то пошло не так')
  }
}

function* cartAddWorker({ payload }: IAddCartAction): Generator<StrictEffect> {

  try {
    yield call(addCart, payload)
    yield call(cartWorker)
    toast.success('Товар добавлен в корзину')
  } catch(e) {
    toast.error('Что то пошло не так')
  }
}

function* cartChangeCountWorker({ payload }: IChangeCountCartAction): Generator<StrictEffect> {
  yield put(cartLoading(true))
  try {
    yield call(changeCountCart, payload)
    yield call(cartWorker)
  } catch(e) {
    yield put(cartLoading(true))
    toast.error('Что то пошло не так')
  }
}
