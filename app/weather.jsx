import React, { useState, useEffect } from "react";
import axios from "axios";
import { WiDayCloudy, WiNightCloudy } from "react-icons/wi";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=8.48354&lon=4.50568&appid=e53a0ee8752ebb9b35c499977742f4de"
        );
        setWeatherData(response.data);
        console.log(weatherData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeatherData(); // Initial fetch

    // Fetch every 15 minutes
    const interval = setInterval(fetchWeatherData, 900000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const tempCelsius = (weatherData.main.temp - 273.15).toFixed(2);
  const description = weatherData.weather[0].description;
  const icon = weatherData.weather[0].icon;
  let IconComponent;

  switch (icon) {
    case "01d":
      IconComponent = WiDayCloudy;
      break;
    case "01n":
      IconComponent = WiNightCloudy;
      break;
    default:
      IconComponent = WiDayCloudy;
  }

  return (
    <div className=" lg:flex items-center lg:space-x-8 p-2 mr-0 lg:mr-12">
      <div className="flex flex-col items-center space-y-1 text-white">
        <IconComponent className="hidden lg:flex text-2xl" />
        <span className="text-sm md:text-lg">{tempCelsius}°C</span>
        <span className="text-xs lg:text-md capitalize">{description}</span>
      </div>
    </div>
  );
}
