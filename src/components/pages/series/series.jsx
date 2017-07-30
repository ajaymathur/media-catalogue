import React from 'react';

import {DisplayCard} from '../../common/display-cards/display-cards';
import {Error} from '../../common/error/error';

import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';
import slice from 'lodash/slice';

import './series.css';
class Series extends React.Component {
  constructor() {
    super();
    this.state = {
      series: [],
      error: false,
      loading: true
    };
  }

  componentDidMount(){
    this.getSeries();
  }

  getSeries(){
    fetch('api/stub/something.json')
      .then(res => res.json())
      .then(res => {
        const seriesEligible = slice(
          sortBy(
            filter(res.entries, data => data.programType === 'series' && data.releaseYear >= 2010),
              series => series.title
          ),
        0, 21);
        this.setState({
          series: seriesEligible,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false
        })
      });
  }



  render() {
    return (
      <div className="series">
        {
          this.state.error &&
          <Error />
        }
        {
          !this.state.error &&
          this.state.series.map(data => <DisplayCard key={data.title} cardDetail={data} loading={this.state.loading}/>)
        }
      </div>
    )
  }
}

export default Series;
