import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { Helmet } from 'react-helmet-async'
//import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import OrdersTable from '../components/OrdersTable'
import { getOrders, getStatuses, getManagers } from '../services/api'
import { IManager, IOrder, IStatus } from '../interfaces'

const OrdersPage:React.FC = () => {
  
  const [orders, setOrders] = useState<IOrder[]>([])
  const [page, setPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number | undefined>(10)
  const [ordersFrom, setOrdersFrom] = useState(1)
  const [ordersTo, setOrdersTo] = useState<number>(10)
  const [number, setNumber] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [manager, setManager] = useState<string>('')
  const [dt1, setDt1] = useState<string>('')
  const [dt2, setDt2] = useState<string>('')
  const [pageCount, setPageCount] = useState(0)
  const [orderCount, setOrderCount] = useState(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [statuses, setStatuses] = useState<IStatus[]>([])
  const [managers, setManagers] = useState<IManager[]>([])

  useEffect(() => {
    getManagers().then(managers => {
      setManagers(managers)
    })
  }, [])

  useEffect(() => {
    setLoading(true)
    let unmounted = false
    Promise.all([getStatuses(), getOrders({page,number,search,status,manager,dt1,dt2,itemsPerPage})]).then(values => {
      if (!unmounted) {
        setStatuses(values[0])
        setOrders(values[1].items)
        setPageCount(values[1].pages)
        setOrderCount(values[1].total_count)

        setOrdersFrom(((page-1) *  Number(itemsPerPage)) + 1)
        const to = ((page-1) *  Number(itemsPerPage)) + Number(itemsPerPage)
        setOrdersTo(to <= values[1].total_count ? to : values[1].total_count)
        setLoading(false)
      }
    });
    return () => { 
      unmounted = true
    }
  },[page, number, search, status, manager, dt1, dt2, itemsPerPage])


  const resetFilter = () => {
    setNumber('')
    setSearch('')
    setStatus('')
    setManager('')
    setDt1('')
    setDt2('')
  }

  let classCard = "card card-custom gutter-b"
  if (loading) classCard += " loading"

  const ResetButton = () => {
    if (number || search || status || manager || dt1 || dt2) {
      return <button type="button" onClick={resetFilter} className="btn btn-outline-primary mr-5">???????????????? ????????????</button>
    } else {
      return null
    }
  } 

  return (
    <div className={classCard}>
      <Helmet>
        <title>???????????? ??????????????</title>
      </Helmet>  
      {/* <BreadcrumbsItem to='/orders'>???????????? ??????????????</BreadcrumbsItem> */}
      <div className="card-header">
        <div className="card-title">
          <h3 className="card-label">???????????? ??????????????</h3>
        </div>

        <div className="card-toolbar">
          <ResetButton />
          <button type="button" className="btn btn-primary">?????????? ??????????</button>
        </div>
      </div>
      <div className="card-body">
        <form className="form form-label-right">
          <div className="form-group row">
            <div className="col-lg-2">
              <input type="date" 
                className="form-control" 
                name="dt1" 
                placeholder="???????? ????????????" 
                value={dt1} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDt1(e.target.value)}/>
              <small className="form-text text-muted"><b>????????</b> ????????????</small>              
            </div>
            <div className="col-lg-2">
              <input type="date" 
                className="form-control" 
                name="dt2" 
                placeholder="???????? ??????????" 
                value={dt2} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDt2(e.target.value)}/>
              <small className="form-text text-muted"><b>????????</b> ??????????</small>              
            </div>
            <div className="col-lg-2">
              <input type="text" 
                className="form-control" 
                name="orderNumber" 
                placeholder="??? ????????????" 
                value={number ?? ''} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)}/>
              <small className="form-text text-muted"><b>??????????</b> ???? ????????????</small>
            </div>
            <div className="col-lg-2">
              <input type="text" 
                className="form-control" 
                name="search" 
                placeholder="??????, ??????, ??????" 
                value={search ?? ''} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}/>
              <small className="form-text text-muted"><b>??????????</b> ??????????</small>
            </div>   
            <div className="col-lg-2">
              <select className="form-control" value={status ?? 0}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)}
                name="status" placeholder="?????????? ???? ??????????????">
                <option value="">??????</option>
                {statuses!.map((status: {id: number, name: string}) => {
                  return <option value={status.id} key={status.id}>{status.name}</option>
                })}
              </select>
              <small className="form-text text-muted"><b>??????????</b> ???? ??????????????</small>
            </div>
            <div className="col-lg-2">
              <select className="form-control" value={manager ?? ''}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setManager(e.target.value)}
                name="manager" placeholder="?????????? ???? ??????????????????">
                <option value="">??????</option>
                {managers!.map((status: {id: number, name: string}) => {
                  return <option value={status.id} key={status.id}>{status.name}</option>
                })}
              </select>
              <small className="form-text text-muted"><b>??????????</b> ???? ??????????????????</small>
            </div>            
          </div>
        </form>
        <div className="react-bootstrap-table table-responsive">
          <OrdersTable orders={orders} statuses={statuses}/>

          <div className="d-flex justify-content-between align-items-center flex-wrap">

            <ReactPaginate 
              pageCount={pageCount}
              pageRangeDisplayed={8}
              marginPagesDisplayed={1}
              onPageChange={(page: {selected: number}) => setPage(page.selected+1)}
              containerClassName="d-flex flex-wrap py-2 mr-3 paginate"
              pageLinkClassName="btn btn-icon btn-sm border-0 btn-light  mr-2 my-1"
              activeLinkClassName="btn-hover-primary active"
              previousLinkClassName="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1"
              nextLinkClassName="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1"
              breakLinkClassName="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1"
              previousLabel="<"
              nextLabel=">"
            />

            <div className="d-flex align-items-center py-3">
              <select className="form-control form-control-sm font-weight-bold mr-4 border-0 bg-light false" 
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setItemsPerPage(Number(e.target.value))}
                value={itemsPerPage ?? 10}
                style={{width: '75px'}}>
                <option className="btn" value="10">10</option>
                <option className="btn" value="50">50</option>
                <option className="btn" value="300">300</option>
              </select>
              <span className="react-bootstrap-table-pagination-total">???????????????? ?? {ordersFrom} ???? {ordersTo} ???? {orderCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrdersPage