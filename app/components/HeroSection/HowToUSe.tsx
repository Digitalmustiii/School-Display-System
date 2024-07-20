import React from "react";

export default function HowToUSe() {
  return (
    <div className="mt-6">
      <div className="flex items-center flex-col">
        <div className="w-full">
          <h2 className="text-2xl ml-6 md:text-3xl lg:text-4xl text-center lg:text-left text-[#7dffff] my lg:my-4">
            How to Use Our platform:
          </h2>
          <h2 className="text-sm ml-6 md:text-2xl lg:text-2xl text-center lg:text-left text-[#7dffff] my-1 lg:my-4 p">
            Using our navigation system is as easy as 1-2-3:
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-x-60 gap-y-10 items-center rounded-2xl justify-center lg:mb-5">
              <div className="text-sm lg:mt-11 flex-1 p-2 lg:pl-12 bg-gray-500 lg:p-8 bg-opacity-50">
                <p className="text-center py-1 lg:py-2 lg:text-2xl lg:text-left">
                  Enable permissions to access location on your device browser
                </p>
                <p className="text-center py-1 lg:py-2 lg:text-2xl lg:text-left">
                  Scan the QR
                </p>
                <p className="text-center py-1 lg:py-2 lg:text-2xl lg:text-left">
                  Enter your destination or choose from popular locations.
                </p>
                <p className="text-center py-1 lg:py-2 lg:text-2xl lg:text-left">
                  Select your preferred mode of transportation (walking, biking,
                  ord riving).
                </p>
                <p className="text-center py-1 lg:py-2 lg:text-2xl lg:text-left">
                  Follow the step-by-step directions to reach your destination
                  hassle-free.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 md:flex-1/2">
            <img
              className="rounded-3xl w-[500px] h-[370px] mx-auto items-center shadow-lg shadow-white/70 flex-1 -mt-12  md:w-[500px] md:h-[400px] lg:py-18 lg:-mt-16 xl:-mt-40 p-16 mb-6 lg:w-auto lg:h-[640px] drop-shadow-lg"
              src="/images/howto.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Call to Action:
// "Ready to explore our campus with ease? Get started now!"
