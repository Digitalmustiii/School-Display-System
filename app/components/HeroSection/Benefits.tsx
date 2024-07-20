import React from "react";

export default function Benefits() {
  return (
    <div className="mt-6">
      <div className="flex items-center flex-col">
        <div className="w-full">
          <h2 className="text-xl pb-2 ml-6 md:text-3xl lg:text-6xl text-center lg:text-left text-[#7dffff] my-1 lg:my-4">
            Experience the following benefits:
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-x-60 gap-y-10 items-center rounded-2xl justify-center lg:mb-5">
              <div className="text-sm lg:mt-11 my-2 flex-1 p-1 lg:pl-12 bg-gray-500 lg:p-8 bg-opacity-50">
                <p className="text-center py-1 lg:py-3 lg:text-2xl lg:text-left">
                  Time-saving: Say goodbye to getting lost and hello to arriving
                  on time.
                </p>
                <p className="text-center py-1 lg:py-3 lg:text-2xl lg:text-left">
                  Stress-free: Eliminate the stress of navigating an unfamiliar
                  campus.
                </p>
                <p className="text-center py-1 lg:py-3 lg:text-2xl lg:text-left">
                  Real-Time Updates: Stay informed about events, construction,
                  and any changes affecting your route.
                </p>
                <p className="text-center py-1 lg:py-3 lg:text-2xl lg:text-left">
                  Explore More: Discover hidden gems and shortcuts around
                  campus."
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 md:flex-1/2">
            <img
              className="rounded-3xl object-cover w-[400px] h-[370px] mx-auto items-center shadow-lg shadow-white/70 flex-1 -mt-10 p-14  md:w-[500px] md:h-[400px] lg:-mt-14 xl:-mt-44 lg:w-auto lg:h-[700px] drop-shadow-xl"
              src="/images/benefits.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
