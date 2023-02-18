import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// setup redux
import { Provider } from 'react-redux'
import store from './redux/configStore';
// scss
import './assets/scss/main.scss'
import ReactBigCalendar from './calendar/ReactBigCalendar';
import ReactCalendar from './calendar/ReactCalendar';
import Detail from './calendar/Detail';
import Eventbrite from './calendar/Eventbrite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='' element={<div><ReactBigCalendar /><ReactCalendar /></div>}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/eventbrite' element={<Eventbrite />}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
