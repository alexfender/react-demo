import React, { useEffect, useState } from 'react'
import { IProduct } from '../interfaces'
import TableSearchItem from './TableSearchItem'
import ShowMore from './ShowMore'

type Props = {
  searchProducts: IProduct[],
  searchAnalogProducts: IProduct[]
}

const TableSearch:React.FC<Props> = ({searchProducts, searchAnalogProducts}: Props) => {
  
  const [showAll, setShowAll] = useState<IProduct[]>([])
  const [showMoreButton, setShowMoreButton] = useState<boolean>(false)

  useEffect(() => {
    setShowAll(searchAnalogProducts.slice(0,6))
    searchAnalogProducts.length > 6 && setShowMoreButton(true)
  },[searchAnalogProducts])

  const showMore = () => {
    setShowAll(searchAnalogProducts)
    setShowMoreButton(false)
  }

  return (
    <>
    <table className="table table table-head-custom table-vertical-center overflow-hidden">
      <thead>
        <tr>
          <th>Артикул</th>
          <th>Бренд</th>
          <th>Наименование</th>
          <th className="text-right">Кол-во</th>
          <th className="text-right">Закупка</th>
          <th className="text-right">Продажа</th>
          <th className="text-right">Прибыль</th>
          <th>Поставщик</th>
          <th>Место</th>
          <th>Актуальность</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {searchProducts.length>0 &&
          <tr>
            <td colSpan={12}><h4 className="mt-2">Запрашиваемый артикул</h4></td>
          </tr>
        }
        {searchProducts.map((product: IProduct) => <TableSearchItem key={product.id} product={product}/>)}
        {searchAnalogProducts!.length>0 &&
          <tr>
            <td colSpan={12}><h4 className="mt-2">Аналоги</h4></td>
          </tr>
        }
        {showAll.map((product: IProduct) => <TableSearchItem key={product.id} product={product}/>)}
      </tbody>
    </table>
    {showMoreButton && <ShowMore showMore={showMore}/>}
    </>
  )
}


export default TableSearch