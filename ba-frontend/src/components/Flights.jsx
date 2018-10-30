import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



class Planeseats extends Component {
  render() {
    return (
      <div>
        <div className="seatRow">
          row
        </div>
        <div className="seatRow">
          row
        </div>
        <div className="seatRow">
          row
        </div>
        <div className="seatRow">
          row
        </div>
      </div>
    )
  }
}

class Flights extends Component {
  constructor() {
    super()
    this.state = {
      userId: 3,
      seats: [],
    }
  }

  // AJAX request to rails for user and current seats taken????

  render() {
    return(
      <div>
        <h1>FLIGHT with ID: {this.props.match.params.id}</h1>
        <Planeseats />
      </div>

    )
  }
}

export default Flights;
