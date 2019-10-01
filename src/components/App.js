import React from "react";
import "../stylesheets/layouts/App.scss";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Results from "./Results";

import getDataFromServer from "./getDataFromServer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      offices: [],
      airports: [],
      dateIn: "", // AAAA-MM-DD
      dateOut: "" // AAAA-MM-DD
    };
    this.handleDateIn = this.handleDateIn.bind(this);
    this.handleDateOut = this.handleDateOut.bind(this);
  }

  componentDidMount() {}

  handleDateIn(ev) {
    console.log(ev.target.value);
    const dateIn = ev.target.value;
    this.setState({
      dateIn: dateIn
    });
  }
  handleDateOut(ev) {
    console.log(ev.target.value);
    const dateOut = ev.target.value;
    this.setState({
      dateIn: dateOut
    });
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
