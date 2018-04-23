import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import SearchBox from './components/searchBox/SearchBox';

import MovieList from './movieList/MovieList';
import MovieDetail from './movieDetail/MovieDetail';
import Home from './home/Home';

import './App.css';



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SearchBox onChange={() => console.log('search clicked')}/>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/movies/:page' component={ MovieList } />
          <Route path='/movie/:id' component={ MovieDetail } />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
