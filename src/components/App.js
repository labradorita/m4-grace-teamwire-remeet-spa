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
      dateIn: "2019-10-18", // AAAA-MM-DD
      dateOut: "2019-10-23", // AAAA-MM-DD
      selectedEmployees: [],
      composeList: []
    };
    this.handleDateIn = this.handleDateIn.bind(this);
    this.handleDateOut = this.handleDateOut.bind(this);
    this.getPrices = this.getPrices.bind(this);
    this.sortedList = this.sortedList.bind(this);
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
    return airportFound || {};
  };

  getPrices() {
    const {
      employees,
      offices,
      dateIn,
      dateOut,
      selectedEmployees
    } = this.state; // Cambiar por participants
    const url = "https://adalab-teamwire.herokuapp.com";
    const allAirports = employees
      .filter(employee => selectedEmployees.includes(employee.id))
      .map(employee => employee.airportCode);
    const airportsFrom = [...new Set(allAirports)]; // para evitar aeropuertos repetidos
    const allResults = [];
    for (let office of offices) {
      const fromOffice = office.airportCode;
      const promisesOffice = [];
      for (let airport of airportsFrom) {
        promisesOffice.push(
          getDataFromServer(
            `${url}/flights/price/from/${airport}/to/${fromOffice}/${dateOut}/${dateIn}`
          )
        );
      }
      allResults.push(Promise.all(promisesOffice)); //Promise.all
    }
    Promise.all(allResults).then(data => this.sortedList(data));
  }
  sortedList(data) {
    // { }
    const { employees, selectedEmployees } = this.state;
    const filteredEmployees = employees.filter(employee =>
      selectedEmployees.includes(employee.id)
    );
    const rawArray = [];
    for (let resultsByAirportTo of data) {
      const participantsResume = [];
      const airportTo = resultsByAirportTo[0].airportTo.code;
      let totalToAirport = 0;
      for (let singleResultAirportFromAirpotTo of resultsByAirportTo) {
        const numParticipatsFrom = filteredEmployees.filter(
          employee =>
            employee.airportCode ===
            singleResultAirportFromAirpotTo.airportFrom.code
        ).length;
        const price =
          singleResultAirportFromAirpotTo.airportFrom.code !==
          singleResultAirportFromAirpotTo.airportTo.code
            ? singleResultAirportFromAirpotTo.avgPrice
            : 0;
        const totalByAirportFrom = numParticipatsFrom * price;
        totalToAirport += totalByAirportFrom;
        const participantsFrom = {
          count: numParticipatsFrom,
          singlePrice: price,
          airportFrom: singleResultAirportFromAirpotTo.airportFrom.code
        };
        participantsResume.push(participantsFrom);
      }
      rawArray.push({ totalToAirport, airportTo, participantsResume });
    }
    const sortedArray = rawArray.sort(
      (airportToPrev, airportToNext) =>
        airportToPrev.totalToAirport < airportToNext.totalToAirport
    );
    //return sortedArray;
    this.setState(
      {
        composeList: sortedArray
      },
      () => console.log(sortedArray)
    );
  }
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
                offices={offices}
                employees={employees}
                selectedEmployees={selectedEmployees}
                onSelect={this.onSelect}
                getPrices={this.getPrices}
              />
            )}
          />
          <Route
            path="/results"
            render={props => (
              <Results
                composeList={this.state.composeList}
                getAirportPropByCode={this.getAirportPropByCode}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
