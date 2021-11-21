import React, { Component } from 'react'
import Book from './Book'
export default class Shelf extends Component {

  /* 
  -mapping over each shelf and rendering a book component
  -id was given separately because of an error i got 
   */
    render() {
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.onShelf.map(
                        (x)=><Book  moveBook = {this.props.moveBook} book={x} key={x.id} id={x.id}/>
                           )}               
                    </ol>
                  </div>
                </div>
        )
    }
}
