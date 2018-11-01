import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css'
import SubmitButton from '../components/SubmitButton'

class Flights extends Component {
  constructor() {
    super()
    this.state = {
      userId: 4,
      reservationState: [], //probably not needed
      totalRows: [],
      totalCols: [],
      flight: {},
      alreadyReserved: [], // not sure??
      selectedSeat: {
        row: null,
        col: null,
      }
    }
  }

  componentDidMount() {
    const paramsFlightID = parseInt(this.props.match.params.flightid)
    const pararmsAirplaneID = parseInt(this.props.match.params.airplaneid)

    // get the particular plane
   axios.get('http://localhost:3000/airplanes.json')
   .then(response => {
     let flightArray = [];
     let plane = response.data.filter(el => el.id === pararmsAirplaneID);

     let rowArray = new Array(plane[0].rows).fill(null);
     let colArray = new Array(plane[0].columns).fill(null);

     for (let i = 0; i < rowArray.length; i++) {
       rowArray[i] = i + 1
     }
     for (let i = 0; i < colArray.length; i++) {
       colArray[i] = i + 1
     }

     let emptyColArray = new Array(plane[0].columns).fill(null);

     for (let i = 0; i < plane[0].rows; i++) {
       flightArray.push(emptyColArray);
     }

     this.setState({
       reservationState: flightArray,
       totalRows: rowArray,
       totalCols: colArray,
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
     let reservationsArray = [];
     reservationsTaken = response.data.filter(el => el.flight_id === paramsFlightID) //array of objects

     reservationsTaken.map(flight => {
       reservationsArray.push([flight.seat_row, flight.seat_column])
     }) //converting to array of arrays
     this.setState({
       alreadyReserved: reservationsArray,
     })
   })
   .catch(console.warn)

  } // component did mount

  handleClick = (row, col) => {
    console.log('row and col from FLIGHTS PARENT:', row, col);
    this.setState({
      selectedSeat: {
        row: row,
        col: col,
      }
    })
  }

  handleReserve = (event) => {
    console.log('flight id: ', this.state.flight.id)
    console.log('userId: ', this.state.userId)
    console.log('row,col: ', this.state.selectedSeat.row, this.state.selectedSeat.col)
    event.preventDefault();

    if (this.state.selectedSeat.row) {
      axios.post('http://localhost:3000/reservations.json', {
        user_id: this.state.userId,
        flight_id: this.state.flight.id,
        seat_row: this.state.selectedSeat.row,
        seat_column: this.state.selectedSeat.col,
      })
      .then(response => {
        let bookedSeatArray = [];
        bookedSeatArray.push(this.state.selectedSeat.row);
        bookedSeatArray.push(this.state.selectedSeat.col);

        let newReserved = this.state.alreadyReserved
        newReserved.push(bookedSeatArray)

        console.log('newreservearray', newReserved)
        this.setState({
          selectedSeat: {
            row: null,
            col: null,
          },
          alreadyReserved: newReserved,
        })
      })
      .catch(console.warn)
    }

  }

  render() {
    return(
      <div>
        <h1>FLIGHT with ID: {this.props.match.params.flightid}</h1>
        {
          this.state.selectedSeat.row ?
          <h1> Selected Seat is (Row:{this.state.selectedSeat.row}, Col:{this.state.selectedSeat.col})</h1>
          :
          <h1> Select a Seat </h1>
        }
        {/* <h1> Selected Seat is (Row:{this.state.selectedSeat.row}, Col:{this.state.selectedSeat.col})</h1> */}

        <form onSubmit={ev => this.handleReserve(ev)}>
          <button className="reserveSeat" type="submit">
            Reserve Seat
          </button>
        </form>
        {this.state.totalRows.map(rowNumber =>
          <Row
            alreadyReserved={this.state.alreadyReserved}
            selectedSeat={this.state.selectedSeat}
            rowPicked={rowNumber}
            columnArray={this.state.totalCols}
            onClick={this.handleClick}
          />
        )}
      </div>

    )
  }

}

class Row extends Component {
  handleClick = (colNumber) => {
    this.props.onClick(this.props.rowPicked, colNumber)
  }

  render() {
    return(
      <div>
        {this.props.columnArray.map(colNumber =>
          <Seats
            alreadyReserved={this.props.alreadyReserved}
            selectedSeat={this.props.selectedSeat}
            className="row"
            rowPicked={this.props.rowPicked}
            columnPicked={colNumber}
            onClick={this.handleClick}
          />
        )}
      </div>
    )
  }
}

class Seats extends Component {
  constructor() {
    super();
    this.state = {
      clickedRow: null,
      clickedCol: null,
    }
  }

  handleClick = () => {
    this.props.onClick(this.props.columnPicked);

    this.setState({
      clickedRow: this.props.rowPicked,
      clickedCol: this.props.columnPicked,
    });
  }

  isSeatReserved = () => {
      let stringifyReservedArray = this.props.alreadyReserved.map(el => el.join('')); //join the row and col together and return an array e.g ["12", "95"] was [[1, 2], [9, 5]]
      let isSeatReservedBoolean = stringifyReservedArray.some(el => el === this.props.rowPicked.toString()+this.props.columnPicked.toString())
      return isSeatReservedBoolean //isSeatReserved should return true if seat is already reserved else false
    }

  render() {
    // console.log(`${this.props.selectedSeat.row}` + `${this.props.selectedSeat.col}`)
    const borderClick = (this.props.selectedSeat.col !== null && this.props.selectedSeat.row === this.state.clickedRow && this.props.selectedSeat.col === this.state.clickedCol) ? 'borderClick' : null;
    const bgColor = (this.isSeatReserved()) ? 'redBG' : 'greenBG';
    return(
      <div
        className={`seat ${bgColor} ${borderClick}` }
        onClick={this.handleClick}
      >
        <div>row: {this.props.rowPicked}</div>
        <div>col: {this.props.columnPicked}</div>
      </div>
    )
  }
}

export default Flights;
