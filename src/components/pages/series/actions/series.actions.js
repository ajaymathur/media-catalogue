import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';
import slice from 'lodash/slice';

export const fetchingSeries = () => ({
    type: 'FETCHING_SERIES_START'
});

export const fetchedSeries = series => ({
    type: 'FETCHED_SERIES_DATA',
    payload: series
});

export const fetchingSeriesError = (err) => ({
    type: 'FETCHING_SERIES_ERROR',
    payload: err
});

export const startFetchingSeries = () => {
    return function(dispatch) {
        dispatch(fetchingSeries());
        return fetch('api/stub/something.json')
        .then(res => res.json())
        .then(res => slice(
          sortBy(
            filter(res.entries, data => data.programType === 'series' && data.releaseYear >= 2010),
              series => series.title
          ),
        0, 21)
        ).then(res => dispatch(fetchedSeries(res)));
    }
}
