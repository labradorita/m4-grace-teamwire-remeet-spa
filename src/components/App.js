import React from "react";
import "../stylesheets/layouts/App.scss";
import getDataFromServer from "./getDataFromServer";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Results from "./Results";
import { employeesURL, officesURL, airportsURL } from "../services/config";
import { get } from "http";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      offices: [],
      airports: [],
      dateIn: "", // AAAA-MM-DD
      dateOut: "", // AAAA-MM-DD
      selectedEmployees: []
    };
    this.handleDateIn = this.handleDateIn.bind(this);
    this.handleDateOut = this.handleDateOut.bind(this);
    this.getAirportPropByCode = this.getAirportPropByCode.bind(this);
    this.getAirportObjectByCode = this.getAirportObjectByCode.bind(this);
    this.getSelectedEmployees = this.getSelectedEmployees.bind(this);
  }

  componentDidMount() {
    const apiPromises = [
      getDataFromServer(employeesURL),
      getDataFromServer(officesURL),
      getDataFromServer(airportsURL)
    ];
    Promise.all(apiPromises).then(results =>
      this.setState({
        employees: results[0],
        offices: results[1],
        airports: results[2]
      })
    );
  }

  getAirportObjectByCode = airportCode => {
    const { airports } = this.state;
    const airportFound = airports.find(airport => airport.code === airportCode);
    //console.log(airportFound);
    return airportFound || {};
  };

  getAirportPropByCode = airportCode => propname => {
    const airport = this.getAirportObjectByCode(airportCode);
    return airport[propname] || null;
  };

  getSelectedEmployees() {
    const { employees } = this.state;
    const selecEmployees = employees.map(
      employee => {
        return employee.id;
      }
      //() => console.log(this.selectedEmployees)
    );
    this.setState(
      {
        selectedEmployees: selecEmployees
      },
      () => console.log(this.state.selectedEmployees)
    );
  }

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
      dateOut: dateOut
    });
  }

  render() {
    // this.getAirportOffice();
    const { offices, employees, airport } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                handleDateIn={this.handleDateIn}
                handleDateOut={this.handleDateOut}
                getAirportPropByCode={this.getAirportPropByCode}
                getAirportObjectByCode={this.getAirportObjectByCode}
                offices={offices}
                employees={employees}
                airport={airport}
                getSelectedEmployees={this.getSelectedEmployees}
              />
            )}
          />
          <Route path="/results" component={Results} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
