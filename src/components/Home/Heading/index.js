import React from "react";
import logo from "../../../img/qantas.svg";
import { Heading } from "./style";
import { Link } from "react-router-dom";
function index() {
    return (
        <Heading data-test="container">
            {/* <Link to="/" className="d-flex">
                <img src={logo} alt="Logo" />
            </Link> */}
            <h3>Welcome to Quatas Online Service</h3>
        </Heading>
    );
}

export default index;
