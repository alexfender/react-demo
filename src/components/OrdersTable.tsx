import React from 'react'
import OrderListItem from './OrderListItem'

import { IOrder, IStatus } from '../interfaces'

type Props = {
  orders: IOrder[]
  statuses: IStatus[]
}

const OrdersList:React.FC<Props> = ({orders, statuses}: Props) => {

  return (
    <table className="table table table-head-custom table-vertical-center overflow-hidden">
      <thead>
        <tr>
          <th>№</th>
          <th>Дата</th>
          <th>Наименование контрагента</th>
          <th>Менеджер</th>
          <th>Тип оплаты</th>
          <th className="text-right">К-во</th>
          <th className="text-right">Сумма</th>
          <th>Телефон клиента</th>
          <th>Комментарий</th>
          <th>Статус</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order:IOrder) => <OrderListItem order={order} statuses={statuses} key={order.id} />)}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={5}></td>
          <td className="text-right"></td>
          <td className="text-right"></td>
          <td colSpan={4}></td>
        </tr>
      </tfoot>
    </table>
  )
}

export default OrdersList