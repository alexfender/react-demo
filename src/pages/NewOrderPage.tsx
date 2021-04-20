import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormSearch from '../components/FormSearch'
import TableSearch from '../components/TableSearch'
import TableCart from '../components/TableCart'

const NewOrderPage:React.FC = () => {

  const [searchProducts, setSearchProducts] = useState([])
  const [searchAnalogProducts, setSearchAnalogProducts] = useState([])
  const cartLoading = useSelector((state: any) => state.cart.cartLoading)

  const onSearch = (products: any) => {
    setSearchProducts(products.list_orig)
    setSearchAnalogProducts(products.list)
  }

  let cartClass = 'card card-custom gutter-b'
  if (cartLoading) {
    cartClass += ' loading' 
  }

  return (
    <>
      <div className="card card-custom gutter-b">
        <div className="card-header">
          <div className="card-title">
            <h3 className="card-label">Поиск детали</h3>
          </div>
          <div className="card-toolbar"></div>
        </div>
        <div className="card-body">
          <FormSearch onSearch={onSearch}/>
        </div>
      </div>

      <div className="card card-custom gutter-b">
        <div className="card-body">
          <TableSearch searchProducts={searchProducts} searchAnalogProducts={searchAnalogProducts}/>
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