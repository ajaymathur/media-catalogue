import React from 'react';

import {DisplayCard} from '../../common/display-cards';
import {Loader} from '../../common/loading';
import fill from 'lodash/fill';
import './movies.css';

//redux
import {connect} from 'react-redux';
//actions
import {fetchMovies} from './actions/movies.actions';

const mapStateToProps = state => ({
  isloading: state.movies.isloading,
  movies: state.movies.movies
});

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(fetchMovies())
})

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      loadingCount: fill(Array(10), 0),
    }
  }

  componentDidMount(){
    this.props.getMovies();
  }

  render() {
    return (
      <div className="movies">
        {
          this.props.isloading &&
          this.state.loadingCount.map((val, index) => (
            <Loader key={index} />
          ))
        }
        {
          !this.props.isloading &&
          this.props.movies.map(data => <DisplayCard key={data.title} cardDetail={data}/>)
        }
      </div>
    )
  }
}

const MoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);

export default MoviesContainer;
