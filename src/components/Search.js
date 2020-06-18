import React, { useState } from 'react';
import { getLocationWeatherByName } from '../functions';

const Search = ({ setLocationsWeatherData }) => {
  const [ locationName, setLocationName ] = useState('');
  const [ error, setError ] = useState();

  const handleSearchLocation = async () => {
    try {
      const weatherData = await getLocationWeatherByName(locationName);
      if (weatherData.message) {
        setError(weatherData.message)
      } else {
        setLocationsWeatherData([ weatherData ]);
        setError();
      }
    } catch {
      alert('Error');
    }
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
        onChange={ handleOnChangeName }
        style={{marginBottom: "10px"}}>
      </input>
      <button type="button" className="btn btn-dark" onClick={ handleSearchLocation }>
        Search
      </button>
      { error &&
        <div className="alert alert-danger" role="alert">
          { error }
        </div>
      }
    </>
  )
};

export default Search;
