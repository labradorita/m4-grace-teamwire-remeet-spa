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
      dateIn: "", // AAAA-MM-DD
      dateOut: "" // AAAA-MM-DD
    };
    this.handleDateIn = this.handleDateIn.bind(this);
    this.handleDateOut = this.handleDateOut.bind(this);
    //this.getDataFromServer = this.getDataFromServer.bind(this)
  }

  componentDidMount() {
    const employeesURL = "https://adalab-teamwire.herokuapp.com/employees";
    const officesURL = "https://adalab-teamwire.herokuapp.com/offices";
    const airportsURL = "https://adalab-teamwire.herokuapp.com/airports";

    getDataFromServer(employeesURL)
      .then(employees => this.setState({
        employees: employees,
      }));

    getDataFromServer(officesURL)
      .then(offices => this.setState({
        offices: offices,
      }));

    getDataFromServer(airportsURL)
      .then(airports => this.setState({
        airports: airports,
      }))
  }

  getAirportName() {
    const { employees, airports } = this.state;
    debugger;
    const newEmployees = employees.map(employee => {
      const airport = airports.find(airport => airport.code === employee.airportCode)
      return { ...employee, airport: airport }
    })
    console.log(newEmployees)
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
    this.getAirportName();
    return (
      <React.Fragment >
        <Header />
        <Link to="/results">Results</Link>
        <Switch>
          <Route exact path="/" render={props => <Home handleDateIn={this.handleDateIn} handleDateOut={this.handleDateOut} />} />
          <Route path="/results" component={Results} />
        </Switch>
      </React.Fragment >
    );
  }
}

export default App;
