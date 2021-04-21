import React from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

const NewOrderPage:React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Поступления</title>
      </Helmet>      
      <BreadcrumbsItem to='/intakes'>Поступления</BreadcrumbsItem>
      Поступления
    </div>
  )
}

export default NewOrderPage