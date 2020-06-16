import React from 'react';
import { getWeatherDataForLocation, getMyLocation } from '../functions';

const LocateButton = ({ setLocationsWeatherData }) => {
  const handleGetNearbyWeather = async () => {
    const location = await getMyLocation();
    const weatherData = await getWeatherDataForLocation(location);
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
