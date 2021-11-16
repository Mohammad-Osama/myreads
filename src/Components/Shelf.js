import React, { Component } from 'react'
import Book from './Book'
export default class Shelf extends Component {
  
    render() {
      console.log('shelf props' , this.props.onShelf)
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <Book></Book>
                      <Book></Book>
                      <Book></Book>
                      
                    </ol>
                  </div>
                </div>
        )
    }
}
