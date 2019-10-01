import React from "react";
import SearchButton from "./SearchButton";
import SearchParticipants from "./SearchParticipants";
import "../stylesheets/layouts/App.scss";
<<<<<<< HEAD
import SearchDate from './SearchDate';
import getDataFromServer from './getDataFromServer';
=======
import SearchDate from "./SearchDate";
>>>>>>> 048cf01bd07dd925d0e7b0790b25c455ec8a9be0

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

  componentDidMount() {

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
    return (
      <div className="App">
        Remeet SPA
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
