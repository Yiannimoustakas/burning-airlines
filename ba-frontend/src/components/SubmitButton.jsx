import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css'

class SubmitButton extends Component {
  constructor() {
    super();
    this.state = {
      selectedSeat: {
        row: null,
        col: null,
      }
    }
  }

  render() {
    return(
      <div>
        <form>
          <input type="submit" value="Reserve Seat"></input>
        </form>
      </div>
    )
  }
}

export default SubmitButton;
