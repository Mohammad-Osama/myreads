import React, { Component } from 'react'
import Book from './Book'
import {moveBook} from './Home'
export default class Shelf extends Component {
  
    render() {
      console.log('shelf props' , this.props.onShelf)
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.onShelf.map((x)=><Book  moveBook = {this.props.moveBook} book={x} key={x.id} id={x.id}   />)}
                      
                      
                    </ol>
                  </div>
                </div>
        )
    }
}
