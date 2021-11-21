import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'


// browser router to the app , to keep the ui in sync with the url
ReactDOM.render(
                <BrowserRouter>
                    <App />
                </BrowserRouter>
                 ,
  document.getElementById('root')
);