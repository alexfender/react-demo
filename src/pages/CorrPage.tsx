import React from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'


const NewOrderPage:React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Корректировки счет-фактур</title>
      </Helmet>        
      <BreadcrumbsItem to='/corr'>Корректировки счет-фактур</BreadcrumbsItem>
      Корректировки
    </div>
  )
}

export default NewOrderPage