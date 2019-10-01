import React from "react";
import SearchButton from "./SearchButton";
import SearchParticipants from "./SearchParticipants";
import "../stylesheets/layouts/App.scss";
import SearchDate from './SearchDate';
import getDataFromServer from './getDataFromServer';


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
      }))

    getDataFromServer(officesURL)
      .then(offices => this.setState({
        offices: offices,
      }))

    getDataFromServer(airportsURL)
      .then(airports => this.setState({
        airports: airports,
      }, () => console.log(this.state)))


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
      dateIn: dateOut
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <SearchDate
          handleDateIn={this.handleDateIn}
          handleDateOut={this.handleDateOut}
        />
        <React.Fragment>
          <SearchParticipants />
          <SearchButton />;
        </React.Fragment>
      </div>
    );
  }
}

export default App;
