// action types
const GET_CIRCUITS_REQUEST = 'GET_CIRCUITS_REQUEST';
const GET_CIRCUITS_SUCCESS = 'GET_CIRCUITS_SUCCESS';
const GET_CIRCUITS_FAILURE = 'GET_CIRCUITS_FAILURE';

// reducer with initial state
const initialState = {
    fetching: false,
    circuits: null,
    error: null,
};

export function CircuitsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CIRCUITS_REQUEST:
            return { ...state, fetching: true, error: null };
        case GET_CIRCUITS_SUCCESS:
            return {
                ...state,
                fetching: false,
                circuits: action.circuits.RaceTable.Races,
            };
        case GET_CIRCUITS_FAILURE:
            return {
                ...state,
                fetching: false,
                circuits: null,
                error: action.error,
            };
        default:
            return state;
    }
}
