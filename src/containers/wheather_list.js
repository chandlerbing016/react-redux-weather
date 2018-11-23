import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/g_map';

class WheatherList extends Component {
    renderWeather = (cityData) => {
        const city = cityData.city;
        const name = city.name;
        const coordinates = city.coord;
        console.log(coordinates);

        var temprature = [];
        var humidity = [];
        var pressure = [];
        cityData.list.map(forecast => {
            temprature.push(forecast.main.temp);
            pressure.push(forecast.main.pressure);
            humidity.push(forecast.main.humidity);
        });
        return (
            <tr key={name}>
                <td><GoogleMap coord={coordinates}/></td>
                <td><Chart data={temprature} color="red" units="k" /></td>
                <td><Chart data={pressure} color="green" units="hPa" /></td>
                <td><Chart data={humidity} color="orange" units="%" /></td>
            </tr>
        );
    }

    render() {

        if (!this.props.weather.length) {
            return (<div>Search for you favorite cities</div>);
        }

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) { // state.weather
    return { weather }; // { weather: weather }
}

export default connect(mapStateToProps)(WheatherList);