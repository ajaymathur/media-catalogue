import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as testing } from 'react-router-dom'
import Routes from './routes';

import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <testing>
          <Routes />
        </testing>
      </Provider>
    );
  }
}

export default App;
