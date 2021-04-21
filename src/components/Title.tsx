import React from 'react';
import { Route } from 'react-router-dom'

const Title:React.FC = () => {
  return (
    <h5 className="text-dark font-weight-bold my-2 mr-5">
      <Route path="/new-order" exact render={() => <>Новый заказ</>} />
      <Route path="/orders" exact render={() => <>Список заказов</>} />
      <Route path="/corr" exact render={() => <>Корректировки счет-фактур</>} />
      <Route path="/intakes" exact render={() => <>Поступления</>} />
    </h5>
  )
}

export default Title
