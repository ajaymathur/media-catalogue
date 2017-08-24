const initialState = {
    isloading: true,
    movies: []
};

const movies = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING_MOVIES':
            return {
                ...state,
                isloading: true
            };
        case 'FETCHED_MOVIES_SUCCESSFUL':
            return {
                ...state,
                isloading: false,
                movies: action.payload
            };
        default:
            return state;
    }
}

export default movies;
