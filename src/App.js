import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import {Route} from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    books:[],
    showSearchPage: false
  }
componentDidMount(){
      BooksAPI.getAll().then((books)=>{
          this.setState({books})
      })
}

  render() {
    return (
        <div className='app'>
            <Route exact path='/' render={() => (
                <ListBooks
                    books={this.state.books}
                />
            )}/>
            <Route path='/create' render={({ history }) => (
                <SearchBooks/>
            )}/>
        </div>
       )
  }
}

export default BooksApp
