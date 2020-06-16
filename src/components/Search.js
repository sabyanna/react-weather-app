import React from 'react';
import { getWeatherData } from '../functions';

const Search = ({ setLocationsWeatherData }) => {
  return (
    <>
      <button type="button" className="btn btn-dark" onClick={ handleGetNearbyWeather }>
        Nearby weather
      </button>
    </>
  )
};

export default Search;
