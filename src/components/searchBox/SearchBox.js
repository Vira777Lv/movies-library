import React, { Component } from 'react';
import './SearchBox.css';


class SearchBox extends Component {

  handleInputSubmit = (e, query) =>{
    this.props.onSearchMovie(query);
    console.log('handleInputSubmit');
    e.preventDefault();
  };

  render () {
    return (
      <form onSubmit={e => this.handleInputSubmit(e, e.target.query.value)}>
        <div className='container'>
          <input
            name='query'
            className='searchInput'
            type='search' placeholder='Search movie...'
            autoComplete={false}
          />
          <button className='search' type='submit'></button>
        </div>
      </form>
    )
  }
}

export default SearchBox;
