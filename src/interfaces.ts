export interface IProduct {
  id: number
  count: number
  int_price: number
  order_id: number
  article: string
  name: string
  price: number
  brand: string
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

export interface TState {
  cart: {
    cart: IProduct[],
    cartLoading: boolean
  }
}