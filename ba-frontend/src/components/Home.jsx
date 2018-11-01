import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Home extends Component {

  render() {
    return(
      <div>
        <h2>Hello, User</h2>
        <Link to="/search"><button className="reserveSeat">Find A Flight</button></Link>
        <hr/>
      </div>
    )
  }
}

export default Home;
