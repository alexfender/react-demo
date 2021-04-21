import React from 'react'
import { useSelector } from 'react-redux'

const BadgeCart:React.FC<any> = () => {
  const cart = useSelector((state: any) => state.cart.cart)
  const countTotal = cart!.reduce((acc: any, prod: any) => acc+Number(prod.count), 0)
  return (
    <span 
      className="MuiBadge-badge MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorPrimary" 
      style={{top: '5px', right: '2px'}}
    >{countTotal}</span>
  )
} 

export default BadgeCart




