import React, {useEffect} from 'react';
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'


import Aside from './Aside'
import Header from './Header'
import OrdersPage from '../pages/OrdersPage'
import NewOrderPage from '../pages/NewOrderPage'
import CorrPage from '../pages/CorrPage'
import IntakePage from '../pages/IntakePage'
import { getCart } from '../redux/actions';
import Subheader from './Subheader';
import Title from './Title';
import Breadcrumbs from './BreadCrumbs';
import Notify from './Notify';


const App:React.FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCart()) //Загружаем корзину 
  }, [])
  
  return (
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-row flex-column-fluid page">
        <Aside />
        <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
          <Header />


          <div id="kt_content" className="content  d-flex flex-column flex-column-fluid">

            <Subheader >
              <Title />
              <Breadcrumbs />
            </Subheader>

            <div className="d-flex flex-column-fluid">
              <div className="container">
                <Route path="/orders" exact component={OrdersPage} />
                <Route path="/new-order" exact component={NewOrderPage} />
                <Route path="/corr" exact component={CorrPage} />
                <Route path="/intakes" exact component={IntakePage} />
              </div>
            </div>
          </div>


        </div>
      </div>
      <Notify />
    </div>
  );
}

export default App;
