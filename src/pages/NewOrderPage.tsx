import React from 'react'
import InputSearch from '../components/InputSearch'
const NewOrderPage:React.FC = () => {


  return (
    <div className="card card-custom gutter-b">
      <div className="card-header">
        <div className="card-title">
          <h3 className="card-label">Поиск детали</h3>
        </div>
        <div className="card-toolbar"></div>
      </div>
      <div className="card-body">
        <form className="jss22">
          <InputSearch />
        </form>
      </div>
    </div>
  )
}

export default NewOrderPage