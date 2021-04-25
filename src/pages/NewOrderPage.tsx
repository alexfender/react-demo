import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
//import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import FormSearch from '../components/FormSearch'
import TableSearch from '../components/TableSearch'
import TableCart from '../components/TableCart'
import TableListRefine from '../components/TableListRefine'
import { IProduct, ISearchProducts, IState, TBrand } from '../interfaces'


const NewOrderPage:React.FC = () => {

  const [searchProducts, setSearchProducts] = useState<IProduct[]>([])
  const [searchAnalogProducts, setSearchAnalogProducts] = useState<IProduct[]>([])
  const [brand, setBrand] = useState<TBrand>(null)
  const [listRefine, setListRefine] = useState<IProduct[]>([])
  const cartLoading = useSelector((state: IState) => state.cart.cartLoading)
  
  const onSearch = (products: ISearchProducts) => {
   
    if (products.list_refine) {
      setListRefine(products.list_refine ?? [])
    } else {
      setListRefine([])
      setBrand(products.brand ?? null)
      setSearchProducts(products.list_orig ?? [])
      setSearchAnalogProducts(products.list ?? [])
    }
  }

  let cartClass = 'card card-custom gutter-b'
  if (cartLoading) {
    cartClass += ' loading' 
  }


  return (
    <>
      <Helmet>
        <title>Новый заказ</title>
      </Helmet>
      {/* <BreadcrumbsItem to='/new-order'>Новый заказ</BreadcrumbsItem> */}

      <div className="card card-custom gutter-b">
        <div className="card-header">
          <div className="card-title">
            <h3 className="card-label">Поиск детали</h3>
          </div>
          <div className="card-toolbar"></div>
        </div>
        <div className="card-body">
          <FormSearch onSearch={onSearch} selectedBrand={brand}/>
        </div>
      </div>

      <div className="card card-custom gutter-b">
        <div className="card-body">
          {listRefine.length>0 && <TableListRefine listRefine={listRefine} onSearch={onSearch}/>}

          {listRefine.length===0 && <TableSearch searchProducts={searchProducts} searchAnalogProducts={searchAnalogProducts}/>}

          
        </div>
      </div>
      
      <div className={cartClass}>
        <div className="card-header">
          <div className="card-title">
            <h3 className="card-label">Корзина товаров</h3>
          </div>
          <div className="card-toolbar"></div>
        </div>
        <div className="card-body">
          <TableCart />
        </div>
      </div>

    </>
  )
}

export default NewOrderPage