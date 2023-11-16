// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleProductPage from "./SingleProductPage";
import App from "./App";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/product/:productId" component={SingleProductPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
