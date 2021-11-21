import React, { Component } from 'react'


export default class Book extends Component {
  state = {
    book : this.props.book
              }

    change = (event) => {/* function invoked upon changing the book,
                         calling back the passed down prop (moveBook) */
      this.props.moveBook(this.props.book, event.target.value)
             }

              
             
  /* 
  -values to the book are given from its corrensponding props 
   */

    render() {      
        return (
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${  /*handeling if the book has no image */
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
                <div className="book-authors">{ // handeling if there is no author 
                                                this.props.book.authors
                                                ? this.props.book.authors
                                                : ''
                                                  }</div>                                                                                         
              </div>
            </li>
        )
    }
}
