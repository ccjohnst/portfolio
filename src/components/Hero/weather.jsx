import React, { useState, useEffect } from 'react';

// Custom hook to fetch data from OpenWeather API
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url).then((response) =>
      response.json().then((data) => {
        const item = data['weather'][0]['icon'];
        setData(item);
        setLoading(false);
      })
    );
  }, []);

  return { data, loading };
};
const WeatherIcon = () => {
  // Use our custom hook to fetch OpenWeather API using API key
  const { data, loading } = useFetch(
    'https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=891ddda0b4720fad959806ec96f4a8dd'
  );
  // Fetch the current weather icon form OpenWeather e.g. rain/sun icon
  const img = `https://openweathermap.org/img/wn/${data}@2x.png`;
  return (
    <>
      {loading ? (
        <div>...loading weather</div>
      ) : (
        <img
          width="40px"
          height="40px"
          src={img}
          alt="An icon of the current image in London"
        ></img>
      )}
    </>
  );
};

export default WeatherIcon;
