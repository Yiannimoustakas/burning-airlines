import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Home extends Component {

  render() {
    return(
      <div>
        <Link to="/search"><button>SEARCH</button></Link>
        <h2>USERID???</h2>
        <hr/>
      </div>
    )
  }
}

export default Home;
