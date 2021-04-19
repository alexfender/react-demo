import React from 'react'

const OrdersPage:React.FC = () => {
  return (
    <div className="card card-custom gutter-b">
      <div className="card-header">
        <div className="card-title">
          <h3 className="card-label">Список заказов</h3>
        </div>
        <div className="card-toolbar">
          <button type="button" className="btn btn-primary">Новый заказ</button>
        </div>
      </div>
      <div className="card-body">
        <form className="form form-label-right">
        </form>
        <div className="react-bootstrap-table table-responsive">
          <table className="table table table-head-custom table-vertical-center overflow-hidden">
            <thead>
              <tr>
                <th className="selection-cell-header" data-row-selection="true">
                  <label className="checkbox checkbox-single">
                    <input type="checkbox" /><span></span>
                  </label>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="selection-cell">
                  <label className="checkbox checkbox-single">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}



export default OrdersPage