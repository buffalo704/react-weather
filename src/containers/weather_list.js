/**
 * Created by sso on 5/8/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class Weatherlist extends Component {

    renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities  = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
      return (
          <tr key={name}>
              <td>{name}</td>
              <td>
                  <Sparklines height={120} width={180} data={temps}>
                      <SparklinesLine color="red"/>
                  </Sparklines>
              </td>
          </tr>
      )
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps) (Weatherlist);