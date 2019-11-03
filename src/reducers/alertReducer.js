import { API_FAILURE, REMOVE_ALERT } from "../action/actionType";

const initialState = {
    message: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case API_FAILURE:
            return { ...state, message: payload };
        case REMOVE_ALERT:
            return { ...state, message: null };
        default:
            return state;
    }
};
