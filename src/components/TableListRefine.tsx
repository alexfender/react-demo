import React from 'react'
import { getProducts } from '../services/api'


const TableSearch:React.FC<any> = ({listRefine, onSearch}: any) => {


  const onSelect = (article: string, brand: string) => {
    getProducts(article, brand).then((products: any) => {
  
      
      onSearch(products)
    })
  }

  return (
    <table className="table table table-head-custom table-vertical-center overflow-hidden list-refine">
      <thead>
        <tr>
          <th>Бренд</th>
          <th>Артикул</th>
          <th>Наименование</th>
        </tr>
      </thead>
      <tbody>
        {listRefine && listRefine.map((product: any) => {
          return (
            <tr key={product.id} onClick={() => onSelect(product.article, product.brand)}>
              <td>{product.brand}</td>
              <td>{product.article}</td>
              <td>{product.name}</td>
            </tr>
          )
        })}

      </tbody>
    </table>
  )
}


export default TableSearch