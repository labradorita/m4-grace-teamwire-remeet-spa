import React from "react";
import "../stylesheets/layouts/App.scss";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Results from "./Results";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
