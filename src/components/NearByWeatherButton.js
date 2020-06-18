import React from 'react';
import { getNearybyWeather } from '../functions';

const NearByWeatherButton = ({ setLocationsWeatherData }) => {
  const handleGetNearbyWeather = async () => {
    try {
      const weatherData = await getNearybyWeather();
      setLocationsWeatherData(weatherData);
    } catch {
      alert('Error');
    }
  }

  return (
    <>
      <button type="button"
        className="btn btn-dark"
        onClick={ handleGetNearbyWeather }
        style={{marginRight: "20px"}}
      >
        Nearby weather
      </button>
    </>
  )
};

export default NearByWeatherButton;
