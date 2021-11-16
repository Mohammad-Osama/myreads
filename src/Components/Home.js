import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI' 


class Home extends Component  {
  state = {
    books :[]
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


 
    render() {
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf title = 'Currently Reading'> </Shelf>
                <Shelf title = 'Want To Read'> </Shelf>
                <Shelf title = 'Read'> </Shelf>
                
                
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

