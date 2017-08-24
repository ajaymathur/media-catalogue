import React from 'react';

import {DisplayCard} from '../../common/display-cards';
import {Loader} from '../../common/loading';
import './series.css';

import fill from 'lodash/fill';
//redux imports
import {connect} from 'react-redux';
//actions
import {startFetchingSeries} from './actions/series.actions';

const mapStateToProps = state => ({
  isloading: state.series.isloading,
  series: state.series.series
});

const mapDispatchToProps = dispatch => ({
  getSeries: () => dispatch(startFetchingSeries())
});

class Series extends React.Component {

  constructor() {
    super();
    this.state = {
      loadingCount: fill(Array(10), 0),
    }
  }

  componentDidMount(){
    this.props.getSeries();
  }

  render() {
    return (
      <div className="series">
        {
          this.props.isloading &&
          this.state.loadingCount.map((val, index) => (
            <Loader key={index} />
          ))
        }
        {
          !this.props.isloading &&
          this.props.series.map(data => <DisplayCard key={data.title} cardDetail={data}/>)
        }
      </div>
    )
  }
}

let SeriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Series);

export default SeriesContainer;
