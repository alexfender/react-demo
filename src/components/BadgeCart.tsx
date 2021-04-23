import React from 'react'
import { useSelector } from 'react-redux'
import { IProduct, TState } from '../interfaces'


const BadgeCart:React.FC = () => {
  const cart = useSelector((state: TState) => state.cart.cart)
  const countTotal = cart!.reduce((acc: number, prod: IProduct) => acc+Number(prod.count), 0)
  return (
    <span 
      className="MuiBadge-badge MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorPrimary" 
      style={{top: '5px', right: '2px'}}
    >{countTotal}</span>
  )
} 

export default BadgeCart




