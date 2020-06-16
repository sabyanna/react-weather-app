import React from 'react'
import { getWeatherData } from '../functions';

const LocateButton = () => {
  return (
    <div>
      <button onClick={ getWeatherData }>
        Locate me
      </button>
    </div>
  )
}

export default LocateButton
