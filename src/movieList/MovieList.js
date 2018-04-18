import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from '../movie/Movie';

import { URL } from '../utils/api';

class MoviesList extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch(URL);
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <MovieGrid>
        <ul>
          {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </ul>
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.section`
  ul {
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1rem;
  }

`;
