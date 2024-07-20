import React from "react";

export default function Welcome() {
  return (
    <div className="max-h-80vh pt-10">
      <div className="flex flex-col lg:flex-row md:justify-center items-start lg:gap-10 flex-grow">
        <div className="flex-1 lg:-mt-16">
          <div className="flex flex-col items-center lg:gap-y-2 rounded-2xl">
            <div className="text-xl flex-1">
              <h1 className="mb-1 mt-1 text-gray-100 max-w-[90%] lg:max-w-[90%] ml-8 text-xl lg:text-5xl font-bold lg:py-3 md:mb-2 ">
                Effortlessly navigate our campus with our state-of-the-art
                Navigation System.
              </h1>
              <div className="flex items-center justify-center">
                <div className=" mx-3 lg:mb-4 flex-1 py-4 max-w-[700px] lg:w-full ml-5 lg:p-6 lg:mx-auto  text-center md:text-left text-sm xl:text-3xl lg:text-3xl  bg-white bg-opacity-50 rounded-2xl text-black">
                  Our navigation system is designed to make your campus
                  experience seamless. Whether you're a student, faculty member,
                  or visitor, easily find your way to your destination with our
                  user-friendly interface.
                </div>
                {/* <div className="flex-1 left-0">
                  <h1>
                    Benefits
                    </h1>
                  </div> */}
              </div>
            </div>
            <div className="hidden 2xl:flex md:text-3xl md:pl-10 md: md:ml-7 bg-[#1056e3] items-center">
              <p className="">
                {" "}
                Navigate Al-Hikmah University's campus with ease
              </p>
              <span>
                {" "}
                <img
                  src="/images/compass.png"
                  alt="Compass icon"
                  className="w-32 h-28-"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 md:flex-1/2">
          <div className="flex h-[80%]">
            <img
              className="rounded-2xl object-cover xs:w-[300px] xs:h-[300px] xs:-mt-12 sm:w-[500px] sm:h-[500px] mx-auto items-center shadow-lg shadow-white/70 flex-1 md:w-[500px] md:h-[400px] -mt-12 py-20 lg:py-18 xl-mt-44 p-10 lg:w-auto lg:h-[700px] lg:p-20 drop-shadow-xl lg:-mt-44 "
              src="/images/navigation.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
