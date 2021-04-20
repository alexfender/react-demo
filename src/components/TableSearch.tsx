import React, { useState, useEffect } from 'react'
import TableSearchItem from '../components/TableSearchItem'

const TableSearch = ({searchProducts, searchAnalogProducts}: any) => {
  return (
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
        {searchProducts && searchProducts.map((product: any) => <TableSearchItem key={product.id} product={product}/>)}
        {searchAnalogProducts.length>0 &&
          <tr>
            <td colSpan={12}><h4 className="mt-2">Аналоги</h4></td>
          </tr>
        }
        {searchAnalogProducts && searchAnalogProducts.map((product: any) => <TableSearchItem key={product.id} product={product}/>)}

        
      </tbody>
    </table>
  )
}


export default TableSearch