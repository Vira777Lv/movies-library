import React, { Component } from 'react';
import styled from 'styled-components';
import * as moment from 'moment';

import { API_URL, API_KEY, OPTIONS } from '../utils/api';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w342';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';


class MovieDetail extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    try {
      const url = `${API_URL}/3/movie/${this.props.match.params.id}?api_key=${API_KEY}&${OPTIONS}`;
      const res = await fetch(url);
      const movie = await res.json();
      this.setState({ movie });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;

    const release_year = moment(movie.release_date).format('YYYY');

    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          <MovieCard>
            <h1>
              {movie.title}
              <span>({release_year})</span>
            </h1>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <a href={movie.homepage}>view online</a>
          </MovieCard>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}


export default MovieDetail;



const MovieWrapper = styled.section`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: #fff;
  background:rgba(68,107,69, .8);
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  div {
    margin-left: 1.2rem;
  }
  img {
    position: relative;
    top: -5rem;
    max-width: 342px;
  }
`;

const MovieCard = styled.div`
  h1 {
    font-family: 'Droid Serif', serif;
    font-size: 2em;
    color: #fff;
    margin-bottom: 2rem;
    white-space: nowrap;
  }
  
  span {
    font-size: .8em;
    margin-left: 1rem;
    opacity: .8;
  }
  h3 {
    font-family: 'Lato', sans-serif;
    font-size: 1.5em;
    color: #00d573;
    margin-bottom: 2rem;
  }
  
  p {
    font-family: 'Raleway', sans-serif;
    font-size: 1.5em;
    color:#fff;
    letter-spacing: 1px;
    line-height: 1.3;
    margin-bottom: 2rem;
  }
  
  a {
    font-family: 'Droid Serif', serif;
    font-size: 1.2em;
    color: #00d573;
    padding-bottom: 3px;
  }
  a:hover {
    color: #ff9900;
    border-bottom: 1px solid #ff9900;
    cursor: pointer;
  }
`;
