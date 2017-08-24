const initialState = {
    isloading: true,
    series: []
}

const series = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING_SERIES_START':
            return {
                ...state,
                isloading: true
            };
        case 'FETCHED_SERIES_DATA':
            return {
                ...state,
                isloading: false,
                series: action.payload
            }
        default:
            return state;
    }
}

export default series;
