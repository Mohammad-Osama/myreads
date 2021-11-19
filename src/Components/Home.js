import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI' 


class Home extends Component  {
  state = {
    books :[] , 
    
  }
  
  async getbooks (){
    const allBooks= await BooksAPI.getAll()
    console.log(allBooks)
    this.setState({books : allBooks})
    console.log( "state" ,  this.state)
    }
   componentDidMount(){
    this.getbooks()    
                }

              moveBook =  async (book, shelf) => {
                await  BooksAPI.update(book, shelf).then(updated => {
                        console.log('updated ' , updated);

                         book.shelf = shelf 
                         this.setState(()=>(
                           {books : this.state.books.filter((x)=>x.id!==book.id).concat([book])}
                           
                           ))
                  });}


 
    render() {
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>currentlyReading
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

