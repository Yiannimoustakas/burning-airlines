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
      <div>
        <div id="formWrapper">
          <div id="form">
              <div className="logo">
                <h1> Welcome to Burning Airlines</h1>
                <h4>WHERE WOULD YOU LIKE TO GO?</h4>
              </div>
            <form onSubmit={ev => this.handleSubmit(ev)}>
          		<div className="form-item">
          			<p className="formLabel"></p>
          			<input type="text" id="email" className="form-style" placeholder="From" onChange={ev => this.handleInputFrom(ev)}/>
          		</div>
          		<div className="form-item">
          			<p className="formLabel"></p>
          			<input type="text" id="password" className="form-style" placeholder="To" onChange={ev => this.handleInputTo(ev)}/>
          		</div>
          		<div className="form-item">
        		    <input type="submit" className="login pull-right" value="Submit"/>
      		      <div className="clear-fix"></div>
          		</div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
