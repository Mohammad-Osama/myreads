import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI' 
import Book from './Book'


class Search extends Component  {
  state = {
    books :[] , 
    searchBook: [] , 
    query : ' '    
  }
  
 // copied from home component
  async getbooks (){
      const allBooks= await BooksAPI.getAll()
      this.setState({books : allBooks})
                    }
      componentDidMount(){
           this.getbooks()
                 }
 // copied from home component
  moveBook =  async (book, shelf) => {
    await  BooksAPI.update(book, shelf).then(updated => {
      book.shelf = shelf 
      this.setState(()=>(
        {books : this.state.books.filter((x)=>x.id!==book.id).concat([book])}            
                ))
      });}

    //a function to set the query and searchbook states
  updateQuery = async (query)=>{
    this.setState({ query : query.trim() })

    
    if (query === "" ||  query === undefined) { // no books in the searchbooks state incase of an error 
          this.setState({ searchBook: [] }); }
          else { // setting searchbook state with the returnd books from search
            const searchedBooks = await BooksAPI.search(this.state.query)               
                this.setState({searchBook : searchedBooks})
                }    
            }

  /* 
  -setting a route to home component on the back button
  - rendering the books return from search,else render a message
   */

  render() {
      return(       
          <div className="search-books">
          <div className="search-books-bar">          
            <Link to='/'>  
                <button className="close-search" >  Close</button>
            </Link>
            <div className="search-books-input-wrapper">              
              <input type="text" 
                      placeholder="Search by title or author"                    
                      onChange = {(x)=>this.updateQuery(x.target.value)}
                />                  
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {    /* rendering the results , show a message when no results */
              this.state.searchBook.length > 0               
              ? this.state.searchBook.map((x)=> <Book  moveBook = {this.moveBook} book={x} key={x.id} id={x.id}   />)
              : <p> no books found </p>
              }             
            </ol>
          </div>
        </div> 
      )}
}

export default Search

