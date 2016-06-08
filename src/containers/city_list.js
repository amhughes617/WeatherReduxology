import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'react';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class CityList extends Component {
    renderList(cityData) {
      const name = cityData.city.name;
      const temps = cityData.list.map(weather => weather.main.temp);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      // const lat = cityData.city.coord.lat;
      // const lon = cityData.city.coord.lon;
      // es6 deconstruction below :D
      const { lon, lat } = cityData.city.coord;
      return (
        <tr key={ name }>
          <td><GoogleMap lat={lat} lon={lon} /></td>
          <Chart data={ temps } color={ "red" } units={ "k" } />
          <Chart data={ pressures } color={ "blue" } units={ "hPa"}/>
          <Chart data={ humidities } color={ "green" } units={ "%" }/>
        </tr>
      );
    }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <td>City</td>
            <td>Temperature</td>
            <td>Pressure</td>
            <td>Humidity</td>
          </tr>
        </thead>
        <tbody>
          { this.props.cities.map(this.renderList) }
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     cities: state.weather
//   };
// }
// weather is a thing inside state using deconstruction to grab itk
function mapStateToProps( {weather} ) {
  return {
    cities: weather
  };
}

export default connect(mapStateToProps)(CityList);
