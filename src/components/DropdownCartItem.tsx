import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IProduct, IState } from '../interfaces'

import { changeCountCart } from '../redux/actions'

type Props = {
  product: IProduct
}

const DropdownCartItem:React.FC<Props> = ({product}: Props) => {

  const dispatch = useDispatch()

  const cartLoading = useSelector((state: IState) => state.cart.cartLoading)

  const decrease = () => {
    !cartLoading && dispatch(changeCountCart(product.id, Number(product.count) <= 1 ? 1 : Number(product.count) - 1 ))
  }

  const increase = () => {
    !cartLoading && dispatch(changeCountCart(product.id, Number(product.count) + 1 ))
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between p-8">
        <div className="d-flex flex-column mr-2">
          <span className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">{product.article}</span>
          <span className="text-muted">{product.name}</span>
          <div className="d-flex align-items-center mt-2">
            <span className="font-weight-bold mr-1 text-dark-75 font-size-3">{product.price}</span>
            <span className="text-muted mr-1">x</span>
            <span className="font-weight-bold mr-2 text-dark-75 font-size-3">{product.count}</span>
            <span className="btn btn-xs btn-light-success btn-icon mr-2" onClick={decrease}>
              -
            </span>
            <span className="btn btn-xs btn-light-success btn-icon" onClick={increase}> 
              +
            </span>
          </div>
        </div>
      </div>
      <div className="separator separator-solid"></div>
    </>
  )
}

export default DropdownCartItem