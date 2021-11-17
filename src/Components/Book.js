import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

export default class Book extends Component {
    render() {
      console.log('book props' , this.props)
        return (
            <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.imageLinks.thumbnail})` }}></div>
                            <ShelfChanger></ShelfChanger>
                          </div>
                          <div className="book-title">{this.props.title}</div>
                          <div className="book-authors">{this.props.authors}</div>
                        </div>
                      </li>
        )
    }
}
