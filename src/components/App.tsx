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
            <div id="kt_subheader" className="subheader py-2 py-lg-4   subheader-solid">
              <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                <div className="d-flex align-items-center flex-wrap mr-1">
                  <div className="d-flex align-items-baseline mr-5">
                    <h5 className="text-dark font-weight-bold my-2 mr-5">Layout Builder</h5>
                    <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2">
                      <li className="breadcrumb-item">
                        <a href="/metronic/react/demo1/dashboard">
                          <i className="flaticon2-shelter text-muted icon-1x"></i>
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a className="text-muted" href="/metronic/react/demo1/builder">Layout Builder</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

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
    </div>
  );
}

export default App;
