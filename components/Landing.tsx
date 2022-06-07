import Image from "next/image";
import React from "react";
import { Header } from "./header";
import Hero from "../public/hero.svg";
import Typo from "../public/Typo.svg";
export const Landing = () => {
  return (
    <>
      <Header />
      <main className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#FEF2EC] text-[#3C2A31] dark:bg-[#22181C]">
        <div className=" z-10 px-7 container flex justify-start -mt-32 md:justify-center items-center flex-col space-y-6 text-center md:mb-0 xl:mb-20">
          <div className="text-[#8D29DC] h-6 md:h-8 w-56 md:w-80">
            <Typo />
          </div>
          <h1 className="mx-auto font-bold text-5xl leading-tight transition-colors md:leading-snug md:text-6xl md:max-w-2xl lg:text-7xl lg:max-w-5xl lg:leading-normal dark:text-white">
            {"Let's learn and grow with the community."}
          </h1>
        </div>
        <div className="absolute bottom-0 w-screen overflow-hidden pointer-events-none">
          <div className="w-[130rem] -ml-[65rem] md:w-[auto] md:-ml-[30rem] lg:mx-0  ">
            <Hero />
          </div>
        </div>
      </main>
    </>
  );
};
