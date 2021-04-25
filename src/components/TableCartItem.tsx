import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'
import { removeCart, changeCountCart } from '../redux/actions'
import Trash from '../assets/svg/trash.svg'
import { IProduct, IState } from '../interfaces'

type Props = {
  product: IProduct
}

const TableCartItem:React.FC<Props> = ({product}: Props) => {

  const dispatch = useDispatch()
  
  const cartLoading = useSelector((state: IState) => state.cart.cartLoading)

  const decrease = () => {
    !cartLoading && dispatch(changeCountCart(product.id, Number(product.count) <= 1 ? 1 : Number(product.count) - 1 ))
  }

  const increase = () => {
    !cartLoading && dispatch(changeCountCart(product.id, Number(product.count) + 1 ))
  }

  const remove = () => {
    !cartLoading && dispatch(removeCart(product.id))
  }

  const onChange = (e: React.ChangeEvent<HTMLElement>) => {
    const value = Number((e.target as HTMLInputElement).value)
    !cartLoading && dispatch(
      changeCountCart(
        product.id, 
        value < 1 ? 1 : value
      )
    )
  }

  return (
    <tr>
      <td>{product.article}</td>
      <td>{product.brand}</td>
      <td>{product.name}</td>
      <td className="text-right">{Number(product.price_in).toLocaleString()}</td>
      <td className="text-right">{Number(product.price).toLocaleString()}</td>
      <td className="text-right">{Number(product.income).toLocaleString()}</td>
      <td>{product.provider}</td>
      <td></td>
      <td>
        <div className="d-flex align-items-center mt-2 inc_dec_button">
          <span className="btn btn-xs btn-light-success btn-icon" onClick={decrease}>-</span>
          <input type="text" value={product.count} onChange={onChange}/>
          <span className="btn btn-xs btn-light-success btn-icon" onClick={increase}>+</span>
          <button className="btn btn-icon btn-light btn-hover-danger btn-sm ml-2" onClick={remove}>
            <ReactSVG src={Trash} className="svg-icon svg-icon-md svg-icon-danger" />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default TableCartItem