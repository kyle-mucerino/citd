import React from "react";
import { Vortex } from "../src/Vortex.js";
import vortexLogo from "./assets/logo3.webp";

export function VortexDemo() {
  return (
    <div className="w-full mx-auto rounded-md  h-[20rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <img className="" alt="logo" src={vortexLogo} />
        {/* <h2 className="text-white text-8xl font-bold text-center uppercase reenie-beanie-regular"> 
          Crossing I's Dotting T's
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <img className="" alt="logo" src={vortexLogo} />
        </div> */}
      </Vortex>
    </div>
  );
}
