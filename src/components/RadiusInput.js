import React, { useState } from 'react';
import { getNearybyWeather } from '../functions';

const RadiusInput = ({ setLocationsWeatherData }) => {
  const [ radius, setRadius ] = useState();

  const handleSetRadius = async () => {
    try {
      const weatherData = await getNearybyWeather(radius);
      setLocationsWeatherData(weatherData);
    } catch {
      alert('Error');
    }
  }

  const handleOnChangeRadius = event => {
    setRadius(event.target.value);
  };

  return (
    <>
      <div className="row">
        <div>
          <input
            type="number"
            className="form-control"
            placeholder='Radius'
            onChange={ handleOnChangeRadius }>
          </input>
        </div>
        <div>
          <button type="button" className="btn btn-dark" onClick={ handleSetRadius } style={{margin: '0'}}>
            Set
          </button>
        </div>
      </div>
    </>
  )
};

export default RadiusInput;
