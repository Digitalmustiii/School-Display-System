"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { IoTimeOutline } from "react-icons/io5";
import { WiDayCloudy, WiNightCloudy } from "react-icons/wi";

export default function Home() {
  return (
    <div className="lg:h-screen bg-gray-100 flex items-center justify-evenly md:justify-center overflow-auto lg:overflow-hidden">
      <div className="bg-white shadow-lg md:overflow-hidden w-full">
        <Header />
        <Main />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="relative text-white flex items-stretch bg-green-900 h-full">
      <HeaderFirstChild />
      <HeaderSecondChild />
    </header>
  );
}

function HeaderFirstChild() {
  return (
    <div className="relative w-3/5 md:w-2/3 overflow-hidden flex items-center">
      <div className="absolute inset-y-0 left-0 w-full bg-black -translate-x-6 transform -skew-x-12 md:border-4 border-gray-900 border-r-white z-0" />
      <div className="relative flex flex-col space-y-4 p-4 z-10">
        <div className="flex md:flex-row md:items-center lg:justify-between lg:gap-64 w-full">
          <Brand />
          <Weather />
        </div>
      </div>
    </div>
  );
}

function HeaderSecondChild() {
  return (
    <div className="relative w-2/5 md:w-1/3 overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full bg-[#005614] transform origin-bottom-left translate-x-6 -skew-x-12 border-4 border-[#005614] border-l-green-900 z-0" />
      <div className="relative flex flex-col items-end justify-between w-full py-4 z-10 text-right">
        <DateTime />
      </div>
    </div>
  );
}

function Brand() {
  return (
    <div className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Alhikmah University Logo"
        width={55}
        height={50}
        className="mx-0"
      />
      <h1 className="mr-4 text-sm lg:text-3xl font-bold">
        AL-HIKMAH UNIVERSITY ILORIN, NIGERIA
      </h1>
    </div>
  );
}

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=8.48354&lon=4.50568&appid=e53a0ee8752ebb9b35c499977742f4de"
        );
        setWeatherData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeatherData();

    const interval = setInterval(fetchWeatherData, 900000);

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

function DateTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="text-white p-6">
      <p className="text-md lg:text-2xl">{formattedDate}</p>
      <p className="text-sm lg:text-xl">{formattedTime}</p>
    </div>
  );
}

function Main() {
  return (
    <main className="flex h-[90vh] overflow-auto md:overflow-hidden justify-center items-stretch border-4 border-t-gray-900">
      <div className="flex flex-col md:flex-row flex-grow">
        <EventList events={events} />
        <ImagesSection />
      </div>
    </main>
  );
}

function EventList({ events }) {
  return (
    <section className="w-full md:w-1/2 flex flex-col bg-[#2E4553] text-white">
      <h2 className="text-xl lg:text-2xl text-center text-white font-semibold bg-[#005614] p-4">
        Upcoming Events
      </h2>
      <div className="flex-grow overflow-y-auto">
        {events.map((event, index) => (
          <Event key={index} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}

function Event({ event, index }) {
  return (
    <article
      className={`flex flex-col justify-between mb-8 ${
        index % 2 === 0 ? "bg-[#2E4553]" : "bg-[#324E5E]"
      }`}
    >
      <div className="flex flex-row items-center gap-20 md:gap-12 p-4">
        <div className="flex flex-col">
          <time className="font-semibold text-3xl text-white">
            {event.date}
          </time>
          <p className="font-semibold text-3xl text-white">{event.month}</p>
        </div>
        <div className="flex flex-col gap-8 uppercase sm:text-md md:text-2xl">
          <p className="text-white">{event.name}</p>
          <div className="flex flex-row items-center gap-2">
            <IoTimeOutline />
            <p className="text-white">{event.time}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function ImagesSection() {
  return (
    <section className="w-full md:w-1/2 bg-gray-900 flex flex-col">
      <div className="hidden md:flex flex-grow">
        <Image
          src="/images/benefits.jpeg"
          alt="benefits"
          width={300}
          height={150}
          className="-top-[-200px] w-full h-1/2 object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center bg-gray-900 mx-auto sm:mx-0 flex-grow mt-0 md:-mt-[300px] lg:-mt-[430px] xl:-mt-[450px]">
        <div className="w-1/2 px-5 py-1">
          <Image
            src="/images/qr1.png"
            alt="QR Code"
            width={250}
            height={250}
            className="object-cover lg:h-2/3"
          />
        </div>
        <p className="text-white text-xl lg:text-3xl">
          Scan to navigate our campus
        </p>
      </div>
    </section>
  );
}

const events = [
  {
    date: "30",
    month: "APR",
    name: "NUC APPROVES ADDITIONAL POSTGRADUATE PROGRAMMES FOR Al-HIKMAH UNIVERSITY",
    time: "5:00 PM",
  },
  {
    date: "18",
    month: "APR",
    name: "COMMENCEMENT OF RAIN SEMESTER, 2023/2024 ACADEMIC SESSION",
    time: "5:00 PM",
  },
  {
    date: "06",
    month: "APR",
    name: "SENATOR SALIU MUSTAPHA FOUNDATION ANNOUNCES SCHOLARSHIPS FOR DESERVING STUDENTS TO PURSUE THEIR UNIVERSITY EDUCATION IN AL-HIKMAH UNIVERSITY",
    time: "9:00 AM",
  },
  {
    date: "20",
    month: "MAR",
    name: "Al-Hikmah University to host 2nd Edition of KU8 International Conference",
    time: "3:00 PM",
  },
];
