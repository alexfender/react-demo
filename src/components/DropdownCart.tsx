import React from 'react'
import { useSelector } from 'react-redux'

import BgImage from '../assets/jpg/bg-1.jpg'
import DropdownCartItem from './DropdownCartItem'


const DropdownCart = () => {

  const cart = useSelector((state: any) => state.cart.cart)

  const summTotal = cart!.reduce((acc: any, prod: any) => acc+prod.price*prod.count, 0)

  const countTotal = cart!.reduce((acc: any, prod: any) => acc+Number(prod.count), 0)

  return (
    <div className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg dropdown-menu show dropdown-menu-right" 
      style={{position: 'absolute', inset:'0px auto auto 0px', margin: '0px', transform: 'translate(-302px, 65px)'}}>
      <form>
        <div className="d-flex align-items-center py-10 px-8 bgi-size-cover bgi-no-repeat rounded-top" 
          style={{backgroundImage: `url(${BgImage})`}}>
          <span className="btn btn-md btn-icon bg-white-o-15 mr-4">
            <i className="flaticon2-shopping-cart-1 text-success"></i>
          </span>
          <h4 className="text-white m-0 flex-grow-1 mr-3">Моя корзина</h4>
          <button type="button" className="btn btn-success btn-sm">Товаров: {countTotal}</button>
        </div>
        <div className="scrollbar-container scroll" style={{maxHeight: '35vh', position: 'relative', overflowY: 'auto'}}>

          {cart!.map((product: any) => <DropdownCartItem key={product.id} product={product}/>)}

        </div>
        <div className="p-8">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <span className="font-weight-bold text-muted font-size-sm mr-2">Итого:</span>
            <span className="font-weight-bolder text-dark-50 text-right">{summTotal.toLocaleString()}</span>
          </div>
          <div className="text-right">
            <button type="button" className="btn btn-primary text-weight-bold">Оформить заказ</button>
          </div>
        </div>
      </form>
    </div>
  )
}


export default DropdownCart