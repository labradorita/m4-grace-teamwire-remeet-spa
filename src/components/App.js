import React from "react";
import "../stylesheets/layouts/App.scss";
import getDataFromServer from './getDataFromServer';
import { Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Results from "./Results";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      offices: [],
      airports: [],
      dateIn: "2019-10-18", // AAAA-MM-DD
      dateOut: "2019-10-23", // AAAA-MM-DD
      participants: [],
      composeList: [],
    };
    this.handleDateIn = this.handleDateIn.bind(this);
    this.handleDateOut = this.handleDateOut.bind(this);
    this.getPrices = this.getPrices.bind(this)
    //this.getDataFromServer = this.getDataFromServer.bind(this)

  }

  componentDidMount() {
    const employeesURL = "https://adalab-teamwire.herokuapp.com/employees";
    const officesURL = "https://adalab-teamwire.herokuapp.com/offices";
    const airportsURL = "https://adalab-teamwire.herokuapp.com/airports";

    const apiPromises = [getDataFromServer(employeesURL), getDataFromServer(officesURL), getDataFromServer(airportsURL)];
    Promise.all(apiPromises)
      .then(results => this.setState({
        employees: results[0],
        offices: results[1],
        airports: results[2],
      }))
  }

  getAirportName() {
    const { employees, airports } = this.state;
    debugger;
    const newEmployees = employees.map(employee => {
      const airport = airports.find(airport => airport.code === employee.airportCode);
      return { ...employee, airport: airport.name }
    });
  }

  //`${url}/flights/price/from/${airportFrom}/to/${airportTo}/${this.state.dateOut}/${this.state.dateIn}`
  getPrices() {
    const { employees, offices, dateIn, dateOut } = this.state; // Cambiar por participants
    const url = "https://adalab-teamwire.herokuapp.com";
    const allAirports = employees.map(employee => employee.airportCode);
    const airportsFrom = [...new Set(allAirports)]; // para evitar aeropuertos repetidos
    const allResults = [];
    for (let office of offices) {
      const fromOffice = office.airportCode;
      const promisesOffice = [];
      for (let airport of airportsFrom) {
        promisesOffice.push(getDataFromServer(`${url}/flights/price/from/${airport}/to/${fromOffice}/${dateOut}/${dateIn}`)
        );
      }
      allResults.push(Promise.all(promisesOffice)); //Promise.all
    }
    Promise.all(allResults)
      .then(data => this.setState({
        composeList: data,
      }))
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
    return (
      <React.Fragment >
        <Header />
        <Link to="/results">Results</Link>
        <Switch>
          <Route exact path="/" render={props => <Home handleDateIn={this.handleDateIn} handleDateOut={this.handleDateOut} getPrices={this.getPrices} />} />
          <Route path="/results" component={Results} />
        </Switch>
      </React.Fragment >
    );
  }
}

export default App;
