import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI' 


class Search extends Component  {


  state = {
    books :[] , 
    searchBook: [] , 
    query : ' '
    
  }

  


      updateQuery = async (query)=>{
        this.setState(()=>({
            query : query.trim()
          }))
          const searchedBooks = await BooksAPI.search(query)
          console.log (searchedBooks)
        }


             













    render() {

      console.log("search state ", this .state.books)

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
                    {JSON.stringify(this.state)}
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>  











        )}
}

export default Search

