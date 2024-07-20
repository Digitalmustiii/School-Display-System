"use client";

import { useState } from "react";
import { AiOutlineSwap } from "react-icons/ai";

export const Inputs = () => {
  const [location, setLocation] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [inputsToggled, setInputsToggled] = useState<boolean>(false);

  const handleToggleInputs = () => {
    setInputsToggled(!inputsToggled);
  };

  return (
    <div className="flex items-center space-x-2.5 justify-between">
      <div className="space-y-2.5">
        <input
          type="text"
          onChange={
            inputsToggled
              ? (e) => setDestination(e.target.value)
              : (e) => setLocation(e.target.value)
          }
          value={inputsToggled ? destination : location}
          className="border rounded-lg px-2.5 text-sm sm:text-lg focus:outline-0 border-dark-green h-10 w-full"
          placeholder={inputsToggled ? "Enter Destination" : "Enter Location"}
        />

        <input
          type="text"
          onChange={
            inputsToggled
              ? (e) => setLocation(e.target.value)
              : (e) => setDestination(e.target.value)
          }
          value={inputsToggled ? location : destination}
          className="border rounded-lg px-2.5 text-sm focus:outline-0 sm:text-lg border-dark-green h-10 w-full"
          placeholder={inputsToggled ? "Enter Location" : "Enter Destination"}
        />
      </div>
      <span
        className="p-2.5 rounded-full bg-dark-green w-12 h-12 inline-flex items-center justify-center "
        onClick={handleToggleInputs}
      >
        <AiOutlineSwap className="rotate-90 text-3xl text-white" />
      </span>
    </div>
  );
};
