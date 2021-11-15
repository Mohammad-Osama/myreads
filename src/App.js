import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Components/Home'
import Search from './Components/Search'
import {Routes , Route} from 'react-router-dom'

class BooksApp extends React.Component {
  
    

  render() {
    return (
      <div className="app">
        <Routes>
         <Route exact path = '/' element = {<Home/>} />
         <Route exact path = '/search' element = {<Search/>} />       
        
        </Routes>       
        
        
      </div>
    )
  }
}

export default BooksApp
