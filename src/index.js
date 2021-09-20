import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import * as myStore from './redux/store';

import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore.store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
