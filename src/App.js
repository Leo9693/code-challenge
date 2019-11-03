import React from "react";
import Home from "./components/Home";
import AirportDetail from "./components/AirportDetail";
import NotMatch from "./components/404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BackgroundBox } from "./style";
function App() {
    return (
        <div className="App">
            <BackgroundBox>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path={"/airport/:id"} exact component={AirportDetail} />
                        <Route component={NotMatch} />
                    </Switch>
                </Router>
            </BackgroundBox>
        </div>
    );
}

export default App;
