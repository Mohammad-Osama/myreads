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
  

  async getbooks (){
    const allBooks= await BooksAPI.getAll()
    console.log(allBooks)
    this.setState({books : allBooks})
    }
   componentDidMount(){
    this.getbooks()    
                }

              moveBook =  async (book, shelf) => {
                await  BooksAPI.update(book, shelf).then(updated => {
                        

                         book.shelf = shelf 
                         this.setState(()=>(
                           {books : this.state.books.filter((x)=>x.id!==book.id).concat([book])}
                           
                           ))
                  });}

  


      updateQuery = async (query)=>{
        this.setState({ query : query.trim()} )
          const searchedBooks = await BooksAPI.search(this.state.query)
          

          if (searchedBooks.error){
                this.setState({searchBook : [] }) 
                          }
            else {
              this.setState({searchBook : searchedBooks})
              console.log (this.state)
                  }
          
        
        }


             













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
                       value = {this.state.query}
                       onChange = {(x)=>this.updateQuery(x.target.value)}
                       
                       
                       
                       
                       />
                    
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                this.state.searchBook.length > 0 &&
              
              this.state.searchBook.map((x)=> <Book  moveBook = {this.moveBook} book={x} key={x.id} id={x.id}   />)
            }
              
              




              </ol>
            </div>
          </div>  











        )}
}

export default Search

