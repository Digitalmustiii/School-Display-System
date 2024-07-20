"use client";

import React from "react";
import Welcome from "./components/HeroSection/Welcome";
import Discover from "./components/HeroSection/Discover";
import Footer from "./components/HeroSection/Footer";
import HowToUSe from "./components/HeroSection/HowToUSe";
import Benefits from "./components/HeroSection/Benefits";
import Explore from "./components/HeroSection/Explore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

export default function Home() {
  return (
    <main className="bg-image-texture overflow-hidden h-screen text-white">
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-center border-green-700 border-b-2 text-xl uppercase bg-green-950 bg-opacity">
            <img
              className="h-9 w-9 md:w-32 md:h-32 my-4 md:my-5 md:ml-5"
              src="/images/logo.png"
              alt=""
            />
            <h1 className="text-sm mr-0 md:text-3xl lg:text-4xl xl:text-5xl font-bold md:mx-auto text-teal-300 shadow-teal-500/50 shadow-lg">
              Al-Hikmah University Navigation System
            </h1>
          </div>
        </div>
        <div className=" mb-[1200px]">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="swiper-container"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="w-full flex flex-grow items-center justify-center bg-green-900 h-screen bg-opacity-50 mb-10">
                <Welcome />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full min-h-[90vh] flex items-center justify-center bg-green-900 mb-10 bottom-0">
                <Discover />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full min-h-[90vh] flex items-center justify-center bg-green-900 mb-10">
                <Benefits />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full min-h-[90vh] flex items-center justify-center bg-green-900 mb-10">
                <HowToUSe />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full min-h-[90vh] flex items-center justify-center">
                <Explore />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  );
}
