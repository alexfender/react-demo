import React from 'react'
import { useSelector } from 'react-redux' 
import TableCartItem from './TableCartItem'


const TableCart:React.FC = () => {

  const cart = useSelector((state: any) => state.cart.cart)

  const summTotal = cart!.reduce((acc: any, prod: any) => acc+prod.price*prod.count, 0)

  const countTotal = cart!.reduce((acc: any, prod: any) => acc+Number(prod.count), 0)

  const cartEmpty = <h4>Корзина пока пуста</h4>

  const cartFull =  
    <table className="table table table-head-custom table-vertical-center overflow-hidden">
      <thead>
        <tr>
          <th>Артикул</th>
          <th>Бренд</th>
          <th>Наименование</th>
          <th className="text-right">Закупка</th>
          <th className="text-right">Продажа</th>
          <th className="text-right">Прибыль</th>
          <th>Поставщик</th>
          <th>Место</th>
        </tr>
      </thead>
      <tbody>
        {cart!.map((product: any) => <TableCartItem key={product.id} product={product}/>)}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4}></td>
          <td className="text-right">
            {summTotal.toLocaleString()}
          </td>
          <td colSpan={3}></td>
          <td className="text-left pl-13">{countTotal.toLocaleString()}</td>
        </tr>
      </tfoot>
    </table>


  return (
    <>
      {cart.length>0 ? cartFull : cartEmpty}
    </>
  )
}

export default TableCart