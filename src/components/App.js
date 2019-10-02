import React from "react";
import "../stylesheets/layouts/App.scss";
import getDataFromServer from "./getDataFromServer";
import { Switch, Route, Link } from "react-router-dom";
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
      participants: [],
      selectedOffices: []
    };
    this.handleDateIn = this.handleDateIn.bind(this);
    this.handleDateOut = this.handleDateOut.bind(this);
    this.getAirportNameByCode = this.getAirportNameByCode.bind(this);
    // this.getAirportName = this.getAirportName.bind(this);
    // this.getAirportOffice = this.getAirportOffice.bind(this);
    // this.getPrices = this.getPrices.bind(this);
    //this.getDataFromServer = this.getDataFromServer.bind(this)
  }

  componentDidMount() {
    // const employeesURL = "https://adalab-teamwire.herokuapp.com/employees";
    // const officesURL = "https://adalab-teamwire.herokuapp.com/offices";
    // const airportsURL = "https://adalab-teamwire.herokuapp.com/airports";

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

  getAirportNameByCode = airportCode => {
    const { airports } = this.state;
    const airportFound = airports.find(airport => airport.code === airportCode);
    const { name } = airportFound;
    return name;
  };

  // getAirportName() {
  //   const { employees, airports } = this.state;
  //   const newEmployees = employees.map(employee => {
  //     const airport = airports.find(
  //       airport => airport.code === employee.airportCode
  //     );
  //     return { ...employee, airport: airport.name };
  //   });
  //   this.setState(
  //     {
  //       participants: newEmployees
  //     },
  //     () => console.log(this.state)
  //   );
  // }

  // getAirportOffice() {
  //   const { offices, airports } = this.state;
  //   const newOffices = offices.map(office => {
  //     const airport = airports.find(
  //       airport => airport.code === office.airportCode
  //     );
  //     return { ...office, airport: airport.name };
  //   });
  //   this.setState(
  //     {
  //       selectedOffices: newOffices
  //     },
  //     () => console.log(this.state)
  //   );
  // }

  // getPrices2() {
  //   const { employees, offices, airports } = this.state; // Cambiar por participants
  //   const allAirports = employees.map(employee => employee.airportCode);
  //   const airportsFrom = [...new set(allAirports)]; // para evitar aeropuertos repetidos
  //   const allPromises = [];
  //   for (let office of offices) {
  //     const allPromises = [];
  //     for (let office of offices) {
  //       const promisesOffice = [];
  //       for (let airport of airports) {
  //         promisesOffice.push(fetch);
  //       }
  //     }
  //   }
  // }

  // getPrices() {
  //   const { airports, offices } = this.state;
  //   for (let airport of airports) {
  //     const url = "https://adalab-teamwire.herokuapp.com";
  //     for (let office of offices) {
  //       let airportTo = office.airportCode;
  //       const airportFrom = airport.code;
  //       const pricesURL = `${url}/flights/price/from/${airportFrom}/to/${airportTo}/${this.state.dateOut}/${this.state.dateIn}`;
  //       if (airportTo !== airportFrom) {
  //         return fetch(pricesURL);
  //       }
  //       console.log(
  //         "airportTO : " + airportTo,
  //         "airportFrom: " + airportFrom + "pricesURL : " + pricesURL
  //       );
  //     }

  //return pricePromises = {fecth()}
  // }

  //const pricePromises = { fecth() }
  // }

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
    const { offices, employees } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Link to="/results">Results</Link>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                handleDateIn={this.handleDateIn}
                handleDateOut={this.handleDateOut}
                getAirportNameByCode={this.getAirportNameByCode}
                offices={offices}
                employees={employees}
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
