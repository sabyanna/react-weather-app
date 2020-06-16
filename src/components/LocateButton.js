import React from 'react';
import { getWeatherData } from '../functions';

const LocateButton = ({ setLocationsWeatherData }) => {
  const handleGetNearbyWeather = async () => {
    const weatherData = await getWeatherData();
    setLocationsWeatherData(weatherData);
  }

  return (
    <>
      <button type="button" className="btn btn-dark" onClick={ handleGetNearbyWeather }>
        Nearby weather
      </button>
    </>
  )
};

export default LocateButton;
