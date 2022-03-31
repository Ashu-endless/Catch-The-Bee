import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Route, Switch } from "react-router";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import App from './App';
import Playground from './Playground/Playground';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path='' element={<App/>} />
      <Route path='playground' element={<Playground/>} />
    </Routes>
    {/* <Playground/> */}
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
