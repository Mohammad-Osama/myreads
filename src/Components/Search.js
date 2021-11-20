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

  


      updateQuery = async (query)=>{
        this.setState({ query : query.trim()} )
          const searchedBooks = await BooksAPI.search(this.state.query)
          console.log (searchedBooks)

          if (searchedBooks.error){
                this.setState({books : [] }) 
                          }
            else {
              this.setState({books : searchedBooks})
                  }
          
        
        }


             













    render() {

      console.log("search state ", this.state.books)

        return(       
            <div className="search-books">
            <div className="search-books-bar">
            
              <Link to='/'>
                  <button className="close-search" >  Close</button>
              </Link>
              <div className="search-books-input-wrapper">
               
                <input type="text" 
                       placeholder="Search by title or author"
                       value = {this.state.query}
                       onChange = {(x)=>this.updateQuery(x.target.value)}
                       
                       
                       
                       
                       />
                    
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                this.state.books.length > 0 &&
              
              this.state.books.map((x)=> <Book  moveBook = {this.props.moveBook} book={x} key={x.id} id={x.id}   />)
            }
              
              




              </ol>
            </div>
          </div>  











        )}
}

export default Search

