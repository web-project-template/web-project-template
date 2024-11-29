import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './pages/App';
import {store} from './store';

import {/*BrowserRouter,*/HashRouter} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);
