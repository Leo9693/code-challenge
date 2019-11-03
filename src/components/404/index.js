import React from "react";
import { Link } from "react-router-dom";
function index() {
    return (
        <div>
            Page doesn't exist
            <Link to={"/"}>Go back to home page</Link>
        </div>
    );
}

export default index;
