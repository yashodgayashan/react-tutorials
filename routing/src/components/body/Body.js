import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Pricing from "./components/pricing/Pricing";
import Features from "./components/features/Features";

const Body = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/feature">
            <Features />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Body;
