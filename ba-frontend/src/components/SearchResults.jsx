import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css'

// CURRENTLY BOTH FROM AND TO NEED TO BE FILLED OUT
const FlightInfo = props => {
  let filteredFlights = [];
  // console.log(props.to)
  // console.log(props.from)
  filteredFlights = props.flights.filter(flight => flight.destination === props.to && flight.origin === props.from)
  // console.log(filteredFlights)
  return (
    <div>
      {filteredFlights.map(el =>
        <li key={el.flight}>
          <span className='result'>{el.date}</span>
          <Link className='result' to={`/flights/${el.flight}`}>{el.flight}</Link>
          <span className='result'>{el.origin} > {el.destination}</span>
          <span className='result'>{el.plane_id}</span>
        </li>
      )}
    </div>
  ) //return
} // FlightInfo

class SearchResults extends Component {
  constructor () {
    super();
    this.state = {
      flights:
      [{
        flight: 3,
        date: "2/3/18",
        origin: 'JFK',
        destination: 'SYD',
        plane_id: 1
      },
    {
      flight: 5,
      date: "1/4/18",
      origin: 'JFK',
      destination: 'HKG',
      plane_id: 2
    },
    {
      flight: 1,
      date: "6/2/18",
      origin: 'JFK',
      destination: 'SYD',
      plane_id: 3
    }],
    }
  }

  //NEED AJAX request for JSON to set data

  render() {
    // console.log(this.props.match.params.from)
    return (
      <div>
        <span className='result resultTitle'>Date</span>
        <span className='result resultTitle'>Flight</span>
        <span className='result resultTitle'>From > To</span>
        <span className='result resultTitle'>Plane</span>
        <ul>
          <FlightInfo flights={this.state.flights} from={this.props.match.params.from} to={this.props.match.params.to}/>
        </ul>
      </div>
    )
  }
}

export default SearchResults;
