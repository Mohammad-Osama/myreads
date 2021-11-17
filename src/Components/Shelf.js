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
                      {this.props.onShelf.map((x)=><Book  {...x} key={x.id} id={x.id}   />)}
                      
                      
                    </ol>
                  </div>
                </div>
        )
    }
}
