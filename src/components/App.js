import React from "react";
import SearchParticipants from "./SearchParticipants";
import "../stylesheets/layouts/App.scss";
import SearchDate from './SearchDate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateIn: "", // AAAA-MM-DD
      dateOut: "", // AAAA-MM-DD
    }
    this.handleDateIn = this.handleDateIn.bind(this);
    this.handleDateOut = this.handleDateOut.bind(this);

  }

  handleDateIn(ev) {
    console.log(ev.target.value)
    const dateIn = ev.target.value
    this.setState({
      dateIn: dateIn
    })
  }
  handleDateOut(ev) {
    console.log(ev.target.value)
    const dateOut = ev.target.value;
    this.setState({
      dateIn: dateOut
    })
  }


  render() {
    return <div className="App">Remeet SPA
    <SearchDate handleDateIn={this.handleDateIn} handleDateOut={this.handleDateOut} />
      <React.Fragment>
        <SearchParticipants />
      </React.Fragment>
    </div>
      ;
  }
}

export default App;
