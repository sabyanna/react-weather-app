import React, { useState } from 'react';
import './App.css';
import LocateButton from './components/LocateButton';
import WeatherTable from './components/WeatherTable';
import Search from './components/Search';

function App() {
  const [ locationsWeatherData, setLocationsWeatherData ] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <LocateButton setLocationsWeatherData={ setLocationsWeatherData } />
        <Search setLocationsWeatherData={ setLocationsWeatherData } />
        { locationsWeatherData &&
          <WeatherTable nearbyWeather={ locationsWeatherData }/>
        }

      </header>
    </div>
  );
}

export default App;
