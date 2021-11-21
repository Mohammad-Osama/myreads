import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI' 


class Home extends Component  {
  state = {
    books :[] , 
    
  }
  // getting all books stored in the api once the app loads 
  async getbooks (){
    const allBooks= await BooksAPI.getAll()
    this.setState({books : allBooks})
          }
   componentDidMount(){
    this.getbooks()    
                }

  moveBook =  async (book, shelf) => {/*function to move the books,
              it will passed down as a prop for shelf and book components */
    await  BooksAPI.update(book, shelf).then(() => {
              book.shelf = shelf 
              this.setState(()=>(// fitlering out the chosen book and render the books without it , then add it back 
                {books : this.state.books.filter((x)=>x.id!==book.id).concat([book])}                
                            ))
                    })
    }

/* --- coudldnt write comments inside the render method for some reason !
   - inside the render method : 
      - rendering the shelves fitlered from the state by state.shelf value
      - title prop was given to each shelf
      - a route on the botton was set to the seach page 
      */ 
 
    render() {
        return(
            <div className="list-books"> 
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div> 
            <div className="list-books-content">
              <div> 
                <Shelf title = 'Currently Reading' onShelf = {this.state.books.filter((x)=>x.shelf==="currentlyReading")} moveBook={this.moveBook}>  </Shelf>
                <Shelf title = 'Want To Read' onShelf = {this.state.books.filter((x)=>x.shelf==="wantToRead")}  moveBook={this.moveBook}> </Shelf>
                <Shelf title = 'Read' onShelf = {this.state.books.filter((x)=>x.shelf==="read")}  moveBook={this.moveBook}> </Shelf>              
              </div>
            </div>
            <div className="open-search">
              <Link to ='/search'>  
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )
      }
}

export default Home 

