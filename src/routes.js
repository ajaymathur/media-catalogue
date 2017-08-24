import React from 'react';
import {Route} from 'react-router-dom';
import { Header } from './components/common/header';
import { Chrome } from './components/common/chrome';
import { Footer } from './components/common/footer';

import { Home } from './components/pages/home';
import { Movies } from './components/pages/movies';
import { Series } from './components/pages/series';

const Routes = () => (
  <div className="App">
    <Header />
    <Chrome />
    <Route exact path="/" component={Home} />
    <Route path="/Movies" component={Movies} />
    <Route path="/Series" component={Series} />
    <Footer />
  </div>
)

export default Routes;
