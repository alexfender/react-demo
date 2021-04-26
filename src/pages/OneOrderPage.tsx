import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { Helmet } from 'react-helmet-async'
//import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import OrdersTable from '../components/OrdersTable'
import { getOrder, getStatuses, getManagers } from '../services/api'
import { IManager, IOrder, IStatus } from '../interfaces'
import { useParams } from 'react-router-dom'

const OneOrderPage:React.FC = () => {
  const { id }: {id?: string} = useParams();

  const [loading, setLoading] = useState<boolean>(false)
  const [order, setOrder] = useState<any>({})

  useEffect(() => {
    setLoading(true)
    let unmounted = false
    getOrder(Number(id) ?? 0).then((order: IOrder) => {
      if (!unmounted) {
        setOrder(order)
        setLoading(false)
      }
    });
    return () => { 
      unmounted = true
    }
  },[id])

  const OrderDataItem:React.FC<{title: string, data: string | number}> = ({title, data}: {title: string, data: string | number}) => {
    return (
      <div className="d-flex align-items-center  mb-2">
        <span className="font-weight-bold order-title mr-2">{title}:</span>
        <span className="text-muted text-hover-primary">{data}</span>
      </div>       
    )
  }


  let classCard = "card card-custom gutter-b"
  if (loading) classCard += " loading"

  return (
    <div className="d-flex flex-row">
      <Helmet>
        <title>Заказ № {id}</title>
      </Helmet> 
      <div className="flex-row-auto offcanvas-mobile w-250px w-xxl-350px" id="kt_profile_aside">
        <div className="card card-custom card-stretch">
          <div className="card-body pt-4">
            <div className="py-9">

              <OrderDataItem title="Заказ" data={order.id} />    
              <OrderDataItem title="Дата" data={new Date(order.dt_insert).toLocaleDateString()} /> 

              <OrderDataItem title="Способ оплаты" data={order.payment_id == 2 ? 'Безналичный расчет' : 'Наличный расчет'} /> 

              <OrderDataItem title="Способ доставки" data={order.delivery_id == 2 ? 'Самовывоз' : 'Доставка'} /> 

              <OrderDataItem title="Клиент" data={order.org_name_short}/> 

              <OrderDataItem title="Отв. менеджер" data={order.fio_min}/> 
    

                      

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneOrderPage