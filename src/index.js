import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
