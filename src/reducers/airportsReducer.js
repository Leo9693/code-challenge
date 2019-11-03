import {
    GET_AIRPORTS_INFO,
    LOAD_MORE_AIRPORTS,
    RESET_AIRPORTS,
    LOAD_EXISTED_AIRPORTS
} from "../action/actionType";

const initialState = {
    isFetched: false,
    airports: null,
    visibleAirportsNumber: 5
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_AIRPORTS_INFO:
            return { ...state, isFetched: true, airports: payload };
        case LOAD_MORE_AIRPORTS:
            let visibleAirportsNumber = state.visibleAirportsNumber + payload;
            return { ...state, visibleAirportsNumber: visibleAirportsNumber };
        case RESET_AIRPORTS:
            return { ...state, visibleAirportsNumber: payload };
        case LOAD_EXISTED_AIRPORTS:
            return { ...state, isFetched: true, airports: payload };
        default:
            return state;
    }
};
