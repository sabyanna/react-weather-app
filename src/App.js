import React from 'react';
import './App.css';
import LocateButton from './components/LocateButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <LocateButton/>
      </header>
    </div>
  );
}

export default App;
