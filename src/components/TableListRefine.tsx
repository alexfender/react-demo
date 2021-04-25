import React from 'react'
import { IProduct, ISearchProducts } from '../interfaces'
import { getProducts } from '../services/api'

type Props = {
  listRefine: IProduct[],
  onSearch: (products: ISearchProducts) => void
}

const TableSearch:React.FC<Props> = ({listRefine, onSearch}: Props) => {

  const onSelect = (article: string, brand: string) => {
    getProducts(article, brand).then((products: ISearchProducts) => {
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
        {listRefine!.map(({id, article, brand, name}: IProduct) => {
          return (
            <tr key={id} onClick={() => onSelect(article, brand)}>
              <td>{brand}</td>
              <td>{article}</td>
              <td>{name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}


export default TableSearch