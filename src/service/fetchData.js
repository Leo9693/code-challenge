import axios from "axios";
import { endPoint } from "../config/endPoint";
export const getAirports = () => {
    return axios.get(endPoint);
};
