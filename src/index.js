import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Context} from './Components/Context';

ReactDOM.render(
  <Context>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Context>,
  document.getElementById('root')
);
serviceWorker.unregister();
