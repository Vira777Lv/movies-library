import React, { Component } from 'react';
import PropTypes from "prop-types";
// import { API_KEY } from '../../utils/api';

import './SearchBox.css';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }


  handleSearch(event) {
    if (event.keyCode === 13) {
      console.log('this.state.value = ', this.state.value);
      event.preventDefault();
    }
  };

  handleChange(event) {
    this.setState({ value: event.target.value });

    // this.searchMovies(value);
    // console.log(value)
  };

// searchMovies(query) {
//     const url = `https://www.themoviedb.org/search/movie?api_key=${API_KEY}&query=${query}`;
//     console.log(url);
//     fetch (url, {
//       headers:{
//         'Accept': 'application/json'
//       },
//       method: 'GET'
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         this.setState({
//           value: data.results
//         })
//         // this.setState({ movies: data.response.results });
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   };


  render () {
    return (
      <form>
        <div className="container">
          <input
            className="searchInput"
            type="search" placeholder="Search..."
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.handleSearch.bind(this)}
          />
          <button className="search" type="submit"></button>
        </div>
      </form>
    )
  }
}

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SearchBox;
