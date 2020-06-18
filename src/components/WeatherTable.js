import React from 'react';
import uuid from "uuid";

const WeatherTable = ({ nearbyWeather }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Place</th>
            <th scope="col">Temperature</th>
            <th scope="col">Weather</th>
          </tr>
        </thead>
        <tbody>
          { nearbyWeather.map((location, index) => 
            <tr key={ uuid.v4() }>
              <td>{ index + 1 }</td>
              <td>{ location.name}</td>
              <td>{ `${ Math.round(Number(location.main.temp) - 273.15)}C°` }</td>
              <td>{ location.weather[0].description }</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
};

export default WeatherTable;
