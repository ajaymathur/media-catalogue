import React, {Component} from 'react';
import './App.css';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import {Header} from './components/common/header';
import {Chrome} from './components/common/chrome';
import {Footer} from './components/common/footer';

import {Home} from './components/pages/home';
import {Movies} from './components/pages/movies';
import {Series} from './components/pages/series';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Chrome />
          <Route exact path="/" component={Home} />
          <Route path="/Movies" component={Movies} />
          <Route path="/Series" component={Series} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
