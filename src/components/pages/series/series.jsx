import React from 'react';

import {DisplayCard} from '../../common/display-cards/display-cards';

import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';
import slice from 'lodash/slice';

import './series.css';
class Series extends React.Component {
  constructor() {
    super();
    this.state = {
      series: []
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
          series: seriesEligible
        });
      });
  }



  render() {
    return (
      <div className="series">
        {
          this.state.series.map(data => <DisplayCard cardDetail={data}/>)
        }
      </div>
    )
  }
}

export default Series;
