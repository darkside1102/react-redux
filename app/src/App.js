import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Layouts/Login";
import Profile from "./Layouts/Profile";
import Tweets from "./Layouts/Tweets";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/tweets" component={Tweets} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
