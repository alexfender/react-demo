import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'
import Cart3 from '../assets/svg/cart3.svg'
import { addCart } from '../redux/actions'


const TableSearchItem:React.FC<any> = ({product}: any) => {

  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const cartLoading = useSelector((state: any) => state.cart.cartLoading)


  useEffect(() => {
    if (!cartLoading) {
      setLoading(false)
    }
  }, [cartLoading])

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


  const onAdd = (product: any) => {
    setLoading(true)
    product.count = count
    dispatch(addCart(product))
    
  }


  const progress = loading ? <div className="MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate" 
              role="progressbar" 
              style={{width: '35px', height: '35px', position: 'absolute'}}>
              <svg className="MuiCircularProgress-svg" viewBox="22 22 44 44"><circle className="MuiCircularProgress-circle MuiCircularProgress-circleDisableShrink MuiCircularProgress-circleIndeterminate" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle></svg>
            </div> : null

  
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
          <button className="btn btn-xs btn-light-success btn-icon" onClick={decrease}>-</button>
          <input type="text" value={count} onChange={(e: any) => setCount(e.target.value < 1 ? 1 : e.target.value)}/>
          <button className="btn btn-xs btn-light-success btn-icon" onClick={increase}>+</button>
          <button className="btn btn-icon btn-clean btn-lg btn-dropdown ml-2" onClick={() => onAdd(product)}>
            <ReactSVG src={Cart3} className="svg-icon svg-icon-xl svg-icon-primary" wrapper='span'/>

            {progress}


          </button>
        </div>
      </td>
    </tr>
  )
}

export default TableSearchItem