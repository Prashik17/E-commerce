import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import  BarChart  from '../src/BarChart';
import  LineGraph  from '../src/LineGraph';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      {/* For Pages */}
      <Route path='/Home' element={<App/>}></Route>
      <Route path='/LineGraph' element ={<LineGraph/>}></Route>
      <Route path='/BarChart' element ={<BarChart/>}></Route>
      <Route path='/' element = ''></Route>
      <Route path='/' element = ''></Route>

     
      
      
      

    </Routes>
   </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
