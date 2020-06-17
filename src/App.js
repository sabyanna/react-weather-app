import React, { useState } from 'react';
import './App.css';
import NearByWeatherButton from './components/NearByWeatherButton';
import WeatherTable from './components/WeatherTable';
import Search from './components/Search';
import RadiusInput from './components/RadiusInput';

function App() {
  const [ locationsWeatherData, setLocationsWeatherData ] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <div className="container">
          <div className="row justify-content-md-center" style={{marginBottom: '10px'}}>
            <div>
              <NearByWeatherButton setLocationsWeatherData={ setLocationsWeatherData } />
            </div>
            <div>
              <RadiusInput setLocationsWeatherData={ setLocationsWeatherData } />
            </div>
          </div>
          <Search setLocationsWeatherData={ setLocationsWeatherData } />
          { locationsWeatherData &&
            <WeatherTable nearbyWeather={ locationsWeatherData }/>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
