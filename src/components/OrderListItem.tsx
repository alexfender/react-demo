import React from 'react'
import { IOrder, IProduct, IStatus } from '../interfaces'

type Props = {
  order: IOrder
  statuses: IStatus[]
}

const OrderListItem:React.FC<Props> = ({order, statuses}: Props) => {

  const date = new Date(order.dt_insert).toLocaleDateString()
  const customer = order.type===2 ? order.org_name_short : order.user_name
  const payment = Number(order.payment_id)===2 ? 'Безнал' : 'Нал'
  const count = order.order_product!.reduce((acc:number, prod:IProduct) => acc + Number(prod.count), 0).toLocaleString()
  const summ = order.order_product!.reduce((acc:number, prod:IProduct) => acc + Number(prod.price) * Number(prod.count), 0).toLocaleString()
  const comment = order.memo.slice(0, 20) + (order.memo.length>20 ? '...' : '')

  const status = statuses.find((el:IStatus) => el.id===order.status_manager_id)!


  return (
    <tr>
      <td>{order.id}</td>
      <td>{date}</td>
      <td>{customer}</td>
      <td>{order.fio_min}</td>
      <td>{payment}</td>
      <td className="text-right">{count}</td>
      <td className="text-right">{summ}</td>
      <td>{order.phone}</td>
      <td>{comment}</td>
      <td>
        <span 
          className="label label-lg label-light-danger label-inline" 
          style={{color: `#${status.font_color}`, backgroundColor: `#${status.color}`}}>{status.name}
        </span>
      </td>
      <td></td>
    </tr>
  )
}


export default OrderListItem