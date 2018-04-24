import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w500';

const Movie = ({ movie }) => (

  <li className='posterCard'>
    <Link to={`/movie/${movie.id}/${movie.title}/${movie.release_date}`}>
      <img src={`${POSTER_PATH}${movie.poster_path}`}
           alt={movie.title}
           className='poster'
      />
      <div className='title'>
        <h3>{movie.title}</h3>
      </div>
    </Link>
  </li>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired
  }).isRequired,
};

