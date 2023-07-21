import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import R from './components/R';
import Ctx from './context/Ctx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Ctx>
    <BrowserRouter>
      <R />
    </BrowserRouter>
  </Ctx>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
