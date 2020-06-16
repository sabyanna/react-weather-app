import React, { useState } from 'react';
import { getLocationWeatherByName } from '../functions';

const Search = ({ setLocationsWeatherData }) => {
  const [ locationName, setLocationName ] = useState('');

  const handleSearchLocation = async () => {
    const weatherData = await getLocationWeatherByName(locationName);
    setLocationsWeatherData([ weatherData ]);
  }

  const handleOnChangeName = event => {
    setLocationName(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder='Enter a city name'
        onChange={ handleOnChangeName }>
      </input>
      <button type="button" className="btn btn-dark" onClick={ handleSearchLocation }>
        Search
      </button>
    </>
  )
};

export default Search;
