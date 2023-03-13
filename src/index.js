import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Goals from './components/Goals';
import Employeeperformance from './components/performance';
import Settings from './components/settings'
import Wallet from './components/wallet';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/Goals' element={<Goals />}/>
      <Route path='/performance' element={<Employeeperformance />}/>
      <Route path='/settings' element={<Settings />}/>
      <Route path='/wallet' element={<Wallet />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();