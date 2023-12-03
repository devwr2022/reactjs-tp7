import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import DetalleProducto from './detalleProducto/detalleProducto';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <DetalleProducto/>
  
    <App />

  </React.StrictMode>
);


reportWebVitals();
