import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import MovieList from './movieList/MovieList';
import MovieDetail from './movieDetail/MovieDetail';
import './App.css';

import SearchBox from './components/searchBox/SearchBox';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SearchBox onChange={() => console.log('search clicked')}/>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
