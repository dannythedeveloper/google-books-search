import React from 'react';
import './App.css'
import ResultsList from './resultsList/ResultsList.js';
import Search from './search/Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchInput: '',
      filter: '', 
      printType: ''
    }
  };

  handleSearch = (e) => {
    this.setState({
      searchInput: e.target.value
    });
  };

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value
    });
  };

  handlePrintType = (e) => {
    this.setState({
      printType: e.target.value
    })
  }

  getBookInfo = (e) => {
    e.preventDefault();
    const API_KEY = 'AIzaSyCI4HKSIjFuTtsGnMCe-ILnQA77S-Z6hMY';
    let Url = ``;
    let input = this.state.searchInput;
    input = input.split(' ').join('+');
    if(this.state.filter === '' && this.state.printType === '') {
      Url = `https://www.googleapis.com/books/v1/volumes?q=${input}&key=${API_KEY}`
    } else if(this.state.filter !== '') {
      Url = `https://www.googleapis.com/books/v1/volumes?q=${input}&filter=${this.state.filter}&key=${API_KEY}`
    } else if(this.state.printType !== '') {
      Url = `https://www.googleapis.com/books/v1/volumes?q=${input}&printType=${this.state.printType}&key=${API_KEY}`
    } else if(this.state.filter !== '' && this.state.printType !== '') {
      Url = `https://www.googleapis.com/books/v1/volumes?q=${input}&filter=${this.state.filter}&printType=${this.state.printType}&key=${API_KEY}`
    }

    fetch(Url)
    .then(response => response.json())
    .then(data => { 
      this.setState({
        books: [...data.items]
      })
    })
  }

  render() {
    return (
      <main className='App'>
        <header>
            <h1>Google Book Search</h1>
        </header>
        <Search
          handleSearch={this.handleSearch} 
          getBookInfo={this.getBookInfo} 
          handleFilter={this.handleFilter}
          />
        <ResultsList 
          books={this.state.books} />
      </main>
    )
  };
}

export default App;