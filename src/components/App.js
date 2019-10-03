import React from "react";
import "../stylesheets/layouts/App.scss";
import getDataFromServer from "./getDataFromServer";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Results from "./Results";
import { employeesURL, officesURL, airportsURL } from "../services/config";

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
    // this.getSelectedEmployees = this.getSelectedEmployees.bind(this);
    // this.onSelect = this.onSelect.bind(this); con => no hace falta bindear
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
        selectedEmployees: results[0].map(e => e.id),
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

  onSelect = ev => {
    const employeeId = ev.target.value;

    const { selectedEmployees } = this.state;
    let selectedEmployeesInc = [];
    if (selectedEmployees.includes(employeeId)) {
      selectedEmployeesInc = selectedEmployees.filter(id => id !== employeeId);
    } else {
      selectedEmployeesInc = [...selectedEmployees, employeeId];
    }
    this.setState({
      selectedEmployees: selectedEmployeesInc
    });
    console.log(selectedEmployeesInc);
  };

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
    const { offices, employees, airport, selectedEmployees } = this.state;
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
                selectedEmployees={selectedEmployees}
                onSelect={this.onSelect}
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
