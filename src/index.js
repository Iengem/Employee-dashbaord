import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import EmployeePage from './components/Employee';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      {/* <Route path='/Employee' element={<EmployeePage />}/>
      <Route path='/Employee' element={<EmployeePage />}/>
      <Route path='/Employee' element={<EmployeePage />}/>
      <Route path='/Employee' element={<EmployeePage />}/>
      <Route path='/Employee' element={<EmployeePage />}/> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();