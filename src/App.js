import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import Home from './home/Home';
import MovieList from './movieList/MovieList';
import MovieDetail from './movieDetail/MovieDetail';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
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
