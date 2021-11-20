import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'
import * as BooksAPI from '../BooksAPI' 
import {moveBook} from './Home'


export default class Book extends Component {
  state = {
    book : this.props.book
              }

              change = (event) => {
                this.props.moveBook(this.props.book, event.target.value)
            }

              
             
  

    render() {
      console.log('book props' , this.props)
      console.log('book state' , this.state)
      
        return (
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${  /*handeling if the book has no image ( my first life book)  */
                                                                                                        this.props.book.imageLinks          
                                                                                                        ? this.props.book.imageLinks.thumbnail
                                                                                                        : ''         })` }}></div>
                  <div className="book-shelf-changer">
                      <select onChange = { this.change} >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
              </div>
            </li>
        )
    }
}
