import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Movie from '../movie/Movie';
import SearchBox from '../components/searchBox/SearchBox';

import { API_KEY } from '../utils/api';


class MoviesList extends Component {
  state = {
    movies: [],
    page: this.props.match.params.page,
    isLoading: true,
  };

  async componentDidMount() {

    try {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2017-10-22&page=${this.props.match.params.page}`;

      const res = await fetch(url);
      const movies = await res.json();
      this.setState({
        movies: movies.results,
        page: movies.page,
        total_pages: movies.total_pages,
        total_results: movies.total_results,
        isLoading: false,
      });
      console.log(movies);
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidUpdate(prevProps, prevState){
    if (prevState.page !== this.props.match.params.page) {
      try {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2017-10-22&page=${this.props.match.params.page}`;
        const res = await fetch(url);
        const movies = await res.json();
        this.setState({
          movies: movies.results,
          page: this.props.match.params.page
        });

      } catch (e) {
        console.log(e)
      }
    }
  }

  handleClick = (e) => {
    document.querySelector('.prev').style.display = 'hidden';
    e.preventDefault();
  };

  handleSearch = (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    fetch(url)
      .then(res => res.json())

      .then(data => {
        this.setState({ movies: data.results })
      })
  };


  render() {

    const { movies, isLoading } = this.state;

    if (isLoading) {
      return <h1>Loading...</h1>
    }

    return (
      <div>
        <SearchBox  onSearchMovie={this.handleSearch}/>
        <MovieGrid>
          {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </MovieGrid>

        <Pagination>
          <div>
            <h4>Currently on page:&nbsp;
              <span>{this.state.page}</span> of <span>{this.state.total_pages}</span>
            </h4>
            <span>( {this.state.total_results} results )</span>
          </div>
          <div className='link'>
            {this.state.page === 1 && <Link to={`${Number(this.state.page)}`} className='prev' onClick={this.handleClick}>&#10094; Prev</Link>}
            {this.state.page > 1 && <Link to={`${Number(this.state.page) - 1}`} className='prev'>&#10094; Prev</Link>}
            <Link to={`${Number(this.state.page) + 1}`} className='next'>Next &#10095;</Link>
          </div>
        </Pagination>

      </div>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.ul`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1rem;
   
  @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
  }
`;


const Pagination = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  width: 100%;
  
  div {
    color: #805be7;
    text-align: center;
  }
  
  h4 {
    font-weight: 300;
    margin-bottom: .3rem;
  }
  
  a {
    color: #4c8fff;
    padding: 0 .5rem;
    color: #fff;
    padding: 0 .5rem;
    background: #805be7;
    background: #4c8fff;
    margin: 0 5px;
    padding: 5px 7px;
    transition: all .3s linear;
  }
  
  a:hover {
    background: #01d277;
  }
`;
