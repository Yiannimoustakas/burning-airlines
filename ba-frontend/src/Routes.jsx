import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Flights from './components/Flights';
import Home from './components/Home';
import Search from './components/Search';
import SearchResults from './components/SearchResults'


const Routes = (
  <Router>
    <div>
      <Route component={Home} />
      <Route exact path="/flights/:id" component={Flights} />
      <Route path="/search" component={Search} />
      <Route path="/search/:from/:to" component={SearchResults} />
    </div>
  </Router>
);

export default Routes
