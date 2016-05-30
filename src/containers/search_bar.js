import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props)


        this.state = { term: '' };

        //binding the context of on input change to this.state.term
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }
    onFormSubmit(event) {
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
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