import { CHANGE_COUNT_CART, PUT_CART, CART_LOADING, ADD_CART, REMOVE_CART } from './redux/types';
export type TBrand = string | null

export interface IProduct {
  id: number
  count: number
  int_price: number
  order_id: number
  article: string
  name: string
  price: number
  price_in: number
  income: number
  brand: string
  sklad: number
  provider: string
  dt_price_update: number
}
export interface ISearchProducts {
  brand?: string
  list_refine?: IProduct[]
  list_orig?: IProduct[]
  list?: IProduct[]
}
export interface IOrder {
  id: number
  dt_insert: string
  delivery_id: number
  email: string
  fio_min: string
  org_name_short: string
  user_name: string
  memo: string
  type: number
  payment_id: number
  phone: string
  status_manager_id: number
  order_product: IProduct[]
}

export interface IStatus {
  id: number
  name: string
  font_color: string
  color: string
}

export interface IState {
  cart: {
    cart: IProduct[],
    cartLoading: boolean
  }
}

export interface IStatus {
  id: number
  name: string
}
export interface IManager {
  id: number
  name: string
}

export interface IPutCartAction {
  type : typeof PUT_CART
  payload: IProduct[]
}

export interface IAddCartAction {
  type : typeof ADD_CART
  payload: IProduct
}

export interface IChangeCountCartAction {
  type : typeof CHANGE_COUNT_CART
  payload: {
    id: number
    count: number
  }
}
export interface IRemoveCartAction {
  type : typeof REMOVE_CART
  payload: number
}


export interface ICartLoadingAction {
  type : typeof CART_LOADING
  payload: boolean
}


export type TCartAction = IPutCartAction | IChangeCountCartAction | ICartLoadingAction

export interface IGetOrdersParams {
  dt1?: string
  dt2?: string
  page?: number
  number?: string
  search?: string
  status?: string
  manager?: string
  itemsPerPage?: number
}