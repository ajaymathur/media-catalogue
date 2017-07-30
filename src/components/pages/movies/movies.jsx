import React from 'react';

import {DisplayCard} from '../../common/display-cards/display-cards';

import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';
import slice from 'lodash/slice';

import './movies.css';
class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount(){
    this.getMovies();
  }

  getMovies() {
    fetch('api/stub/something.json')
      .then(res => res.json())
      .then(res => {
        const moviesEligible = slice(
          sortBy(
            filter(res.entries, data => data.programType === 'movie' && data.releaseYear >= 2010),
            movies => movies.title
          ),
          0, 21);
        this.setState({
          movies: moviesEligible
        });
      });
  }

  render() {
    return (
      <div className="movies">
        {
          this.state.movies.map(data => <DisplayCard cardDetail={data}/>)
        }
      </div>
    )
  }
}

export default Movies;
