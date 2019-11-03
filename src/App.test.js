import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

test.skip("successfully mount App component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    const container = div.getElementsByClassName("App");
    expect(container.length).toBe(1);
});
