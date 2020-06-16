const getMyLocation = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const getLocationWeatherByName = async (locationName) => {
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ locationName }&appid=1ba19cef59cef00a5fa51974b914656c`
    const response = await fetch(url);
    const city = await response.json();

    return city;
  } catch(error) {
    return { error }
  }
}

const getNearbyPlaces = async (latitude, longitude) => {
  const url = `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${latitude}&lng=${longitude}&username=eggdice&radius=10`
  const response = await fetch(url);
  const nearby = await response.json();

  return nearby.geonames;
}

const getNearbyWeather = async (nearbyPlaces) => {
  const nearbyWeather = await Promise.all(
    nearbyPlaces.map(async place => {
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${place.lat}&lon=${place.lng}&appid=1ba19cef59cef00a5fa51974b914656c`
      const response = await fetch(url)
      const placeWeather = await response.json();

      return placeWeather;
    })
  )

  return nearbyWeather;
}

export const getWeatherData = async () => {
  const myLocation = await getMyLocation();

  const latitude  = myLocation.coords.latitude;
  const longitude = myLocation.coords.longitude;

  const nearby = await getNearbyPlaces(latitude, longitude);

  const nearbyWeather = await getNearbyWeather(nearby);

  return nearbyWeather;
}