import React, {useState} from 'react'
import { ReactSVG } from 'react-svg'
import Cart3 from '../assets/svg/cart3.svg'

const TableSearchItem = ({product}: any) => {

  const [count, setCount] = useState(1)


  const decrease = () => {
    setCount(prev => {
      if (Number(prev)-1 < 1) {
        return 1
      }
      return Number(prev)-1
    })
  }

  const increase = () => {
    setCount(prev => Number(prev)+1)
  }

  const onChange = (e: any) => {
    setCount(e.target.value < 1 ? 1 : e.target.value)
  }

  
  return (
    <tr>
      <td>{product.article}</td>
      <td>{product.brand}</td>
      <td>{product.name}</td>
      <td className="text-right">{product.sklad}</td>
      <td className="text-right">{product.price_in}</td>
      <td className="text-right">{product.price}</td>
      <td className="text-right">{product.income}</td>
      <td>{product.provider}</td>
      <td></td>
      <td>{product.dt_price_update}</td>
      <td>
        <div className="d-flex align-items-center mt-2 inc_dec_button">
          <span className="btn btn-xs btn-light-success btn-icon" onClick={decrease}>-</span>
          <input type="text" value={count} onChange={(e: any) => setCount(e.target.value < 1 ? 1 : e.target.value)}/>
          <span className="btn btn-xs btn-light-success btn-icon" onClick={increase}>+</span>
          <div className="btn btn-icon btn-clean btn-lg btn-dropdown ml-2">
            <ReactSVG src={Cart3} className="svg-icon svg-icon-xl svg-icon-primary" />
          </div>
        </div>
      </td>
    </tr>
  )
}

export default TableSearchItem