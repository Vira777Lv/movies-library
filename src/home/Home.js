import React, { Component } from 'react';
import styled from 'styled-components';
import {  Link } from 'react-router-dom';

import Movie from '../movie/Movie';
import Footer from '../footer/Footer';
import SearchBox from '../components/searchBox/SearchBox';
import { API_KEY } from '../utils/api';


class Home extends Component {

  state = {
    movies : [],
    page: this.props.match.params.page,
  };

  async componentDidMount() {
    try {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2017-10-22${this.props.match.params.page = 2}`;
      const res = await fetch(url);
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies : movies.results,
        page: this.props.match.params.page,
      })

    } catch(e){
      console.log(e);
    }
  }

  handleSearch = (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: data.results });
        console.log(data)
      });
    console.log('handleSearch in home page')

  };



  render() {
    return (
      <main>
        <SearchBox onSearchMovie={this.handleSearch}/>
        <MovieGrid>
          {this.state.movies.map( movie => <Movie key={movie.id} movie={movie}/> )}
        </MovieGrid>
        <Pagination>
          <h5>Page 1</h5>
          <Link to={`/movies/${this.state.page}`}>Next &#10095;</Link>
        </Pagination>
        <Footer />
      </main>
    );
  }
}


export default Home;

const MovieGrid = styled.ul`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(4,1fr);
    grid-row-gap: 1rem;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2,1fr);
    }
`;



const Pagination = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem;
  
  h5 {
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: 200;
    margin-right: 10px;
    color: #4c8fff;
  }
      
  a {
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
