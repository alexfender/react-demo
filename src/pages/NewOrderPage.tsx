import React, { useState, useEffect } from 'react'
import FormSearch from '../components/FormSearch'
import TableSearch from '../components/TableSearch'
const NewOrderPage:React.FC = () => {

  const [searchProducts, setSearchProducts] = useState([])
  const [searchAnalogProducts, setSearchAnalogProducts] = useState([])


  const onSearch = (products: any) => {
    console.log(products);
    setSearchProducts(products.list_orig)
    setSearchAnalogProducts(products.list)
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
    </>
  )
}

export default NewOrderPage