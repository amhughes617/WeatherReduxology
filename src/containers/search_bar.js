import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';


export default class SearchBar extends Component {

    constructor(props) {
        super(props)


        this.state = { term: '' };

        //binding the context of on input change to this.state.term
        //can bind here, or I can do it with fat arrow below
        this.onInputChange = this.onInputChange.bind(this);
        // this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState( { term: '' } );
    }

    render() {
        return (
            //the fat arrow function here binds callback to this without having to do it above
            <form onSubmit={event => this.onFormSubmit(event)} className="input-group">
              <input
                placeholder="Get a 5-day forecast in your city"
                className="form-control"
                onChange={ this.onInputChange }
                value={ this.state.term }
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
              </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
