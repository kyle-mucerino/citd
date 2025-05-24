"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";
import vortexLogo from "./assets/logo3.webp";
import homepage from "./assets/homepage.jpg";
import logo1 from "./assets/logo.jpeg";
import logo2 from "./assets/logo2.jpeg";
import logo2black from "./assets/logo2black.jpeg";
import logo2blue from "./assets/logo2blue.png";
import logo2grey from "./assets/logo2grey.jpeg";
import logo3 from "./assets/logo3.webp";
import logo4 from "./assets/logo4.webp";



export function LampDemo() {
  return (
    <LampContainer className="hidden sm:flex">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl flex flex-col"
      >
        <img
          className=""
          alt="Crossing i's Dotting t's logo"
          src={vortexLogo}
        />
        <div className="text-5xl reenie-beanie-regular">Explore Below</div>
        <div className="text-xl">&darr;</div>
        <div className="flex flex-row space-x-2 mt-4">
          <img
            className="h-1/5 rounded-lg w-1/5"
            alt="Crossing i's Dotting t's logo"
            src={logo1}
          />
          <img
            className="h-1/5 rounded-lg w-1/5"
            alt="Crossing i's Dotting t's logo"
            src={logo2}
          />
          <img
            className="h-1/5 rounded-lg w-1/5"
            alt="Crossing i's Dotting t's logo"
            src={logo3}
          />
          <img
            className="h-1/5 rounded-lg w-1/5"
            alt="Crossing i's Dotting t's logo"
            src={logo2black}
          />
          <img
            className="h-1/5 rounded-lg w-1/5"
            alt="Crossing i's Dotting t's logo"
            src={logo4}
          />
        </div>
      </motion.h1>
    </LampContainer>
  );
}
