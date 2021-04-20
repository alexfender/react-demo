import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom'
import { rootReducer } from './redux/rootReducer'
import { cartWatcher } from './redux/sagas'

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(
      saga
    )
  )
)

saga.run(cartWatcher)
// saga.run(cartRemoveWatcher)
// saga.run(cartAddWatcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

