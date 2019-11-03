import {
    GET_AIRPORTS_INFO,
    LOAD_MORE_AIRPORTS,
    RESET_AIRPORTS,
    API_FAILURE,
    REMOVE_ALERT,
    LOAD_EXISTED_AIRPORTS
} from "./actionType";

import { getAirports } from "../service/fetchData";
export const getAirportInfo = () => async dispatch => {
    // handling API failures
    try {
        const res = await getAirports();
        // cache data in localstorage
        // cached data will be used to render pages even there is no internet
        localStorage.setItem("airports", JSON.stringify(res.data));
        dispatch({
            type: GET_AIRPORTS_INFO,
            payload: res.data
        });
    } catch {
        dispatch({
            type: API_FAILURE,
            payload: "Fail to fetch data from the API, please check"
        });
        // remove alert after 2s
        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERT
            });
        }, 2000);
    }
};

export const loadMoreAirports = () => dispatch => {
    // by default, one click can view 5 more airports
    const increasedNum = 5;
    dispatch({
        type: LOAD_MORE_AIRPORTS,
        payload: increasedNum
    });
};

export const resetAirports = () => dispatch => {
    const resetNum = 5;
    dispatch({
        type: RESET_AIRPORTS,
        payload: resetNum
    });
};

export const loadExistedAirports = airports => dispatch => {
    dispatch({
        type: LOAD_EXISTED_AIRPORTS,
        payload: airports
    });
};
