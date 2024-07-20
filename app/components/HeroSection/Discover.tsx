import React from "react";

export default function Discover() {
  return (
    <div className="max-h-90vh">
      <div className="flex items-center flex-col">
        <div className="w-full">
          <h2 className="text-2xl mt-4 lg:mt-1 ml-6 md:text-3xl lg:text-5xl text-center lg:text-left text-[#7dffff] my-1 lg:my-4">
            Discover key features such as:
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-x-60 gap-y-10 items-center rounded-2xl justify-center lg:mb-5">
              <div className="text-sm lg:mt-8 flex-1 p-1 lg:pl-12 bg-gray-500 lg:p-8 bg-opacity-50">
                <p className="text-center py-2 lg:py-3 lg:text-2xl lg:text-left">
                  Interactive Map: Explore every corner of our campus with our
                  detailed map.
                </p>
                <p className="text-center py-2 lg:py-3 lg:text-2xl lg:text-left">
                  Customizable Routes: Tailor your journey to suit your
                  preferences and schedule.
                </p>
                <p className="text-center py-2 lg:py-3 lg:text-2xl lg:text-left">
                  Real-Time Updates: Stay informed about events, construction,
                  and any changes affecting your route.
                </p>
                <p className="text-center py-2 lg:py-3 lg:text-2xl lg:text-left">
                  Accessibility Options: We ensure everyone can navigate our
                  campus comfortably and inclusively.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 md:flex-1/2 mb-12">
            <img
              className="object-cover rounded-3xl w-[450px] h-[370px] mx-auto items-center shadow-lg shadow-white/70 flex-1 md:w-[500px] md:h-[400px] -mt-10 p-14  lg:-mt-14 xl:-mt-36 lg:w-auto lg:h-[700px] drop-shadow-xl pb-10"
              src="/images/ddd.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
