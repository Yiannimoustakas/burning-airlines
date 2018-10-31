import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css'

const createTable = props => {
  // console.log(props);
  let table = []

  // Outer loop to create parent
  for (let i = 0; i < props.rows; i++) {
    let children = []
    //Inner loop to create children
    for (let j = 0; j < props.columns; j++) {
      children.push(<div row={`${i + 1}`} col={`${j + 1}`} className="grid-container" >{`R${i + 1} C${j + 1}`}</div>)
    }
    //Create the parent and add the children
    table.push(<div className="grid-item">{children}</div>)
  }
  return table
}

const Planeseats = props => {
  // console.log(props);
    return (
        <div>
          {createTable(props)}
        </div>
    )
}

class Flights extends Component {
  constructor() {
    super()
    this.state = {
      plane: {},
      flight: {},
      reservations: [],
    }
  }

  // AJAX request to rails for user and current seats taken????
  componentDidMount() {
    console.log('this', this);
    const paramsFlightID = parseInt(this.props.match.params.flightid)
    const pararmsAirplaneID = parseInt(this.props.match.params.airplaneid)

    // get the particular plane
   axios.get('http://localhost:3000/airplanes.json')
   .then(response => {
     let plane;
     // console.log('array of plane objects: ', response.data)
     plane = response.data.filter(el => el.id === pararmsAirplaneID)
     this.setState({
       plane: plane[0],
     })
   })
   .catch(console.warn)

   // get the particular flight
   axios.get('http://localhost:3000/flights.json')
   .then(response => {
     let flight;
     // console.log('array of flight objects: ', response.data)
     flight = response.data.filter(el => el.id === paramsFlightID)
     // console.log(flight[0]);
     this.setState({
       flight: flight[0],
     })
   })
   .catch(console.warn)

   // get all reservations for this particular flight
   axios.get('http://localhost:3000/reservations.json')
   .then(response => {
     let reservationsTaken;
     console.log(response.data);
     reservationsTaken = response.data.filter(el => el.flight_id === paramsFlightID)
     console.log(reservationsTaken)
     this.setState({
       reservations: reservationsTaken
     })
   })
   .catch(console.warn)

  } // component did mount




  render() {
    return(
      <div>
        <h1>FLIGHT with ID: {this.props.match.params.flightid}</h1>
        <Planeseats rows={this.state.plane.rows} columns={this.state.plane.columns} reservedSeat={this.state.reservations}/>
      </div>

    )
  }
}

export default Flights;
