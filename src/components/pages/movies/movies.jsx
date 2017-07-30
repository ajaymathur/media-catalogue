import React from 'react';

import {DisplayCard} from '../../common/display-cards/display-cards';
import {Error} from '../../common/error/error';

import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';
import slice from 'lodash/slice';

import './movies.css';
class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false,
      loading: true
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
          movies: moviesEligible,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  render() {
    return (
      <div className="movies">
        {
          this.state.error &&
          <Error />
        }
        {
          !this.state.error &&
          this.state.movies.map(data => <DisplayCard key={data.title} cardDetail={data} loading={this.state.loading}/>)
        }
      </div>
    )
  }
}

export default Movies;
