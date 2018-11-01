import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import SearchResults from '../components/SearchResults';
import '../App.css'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      from: '',
      to: '',
    }
  }

  handleInputFrom(event) {
    this.setState({
      from: event.target.value.toUpperCase(),
    })
  }

  handleInputTo(event) {
    this.setState({
      to: event.target.value.toUpperCase(),
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/search/${this.state.from}/${this.state.to}`);
  }


  render() {
    return(
      <div className="search">
        <h1>Burning Airlines</h1>
        <form onSubmit={ev => this.handleSubmit(ev)}>
          <div>
            FROM:
            <input type="text" onChange={ev => this.handleInputFrom(ev)}></input>
          </div>
          <div>
            TO:
            <input type="text" onChange={ev => this.handleInputTo(ev)}></input>
          </div>

          <input type="submit" value="Search"></input>
         </form>
      </div>
    )
  }
}

export default Search;
