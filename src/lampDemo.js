"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";
import vortexLogo from "./assets/logo3.webp";

export function LampDemo() {
  return (
    <LampContainer>
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
        <h1 className="text-xl sm:text-5xl reenie-beanie-regular">
          Crossing i's Dotting t's - Official Website
        </h1>
        <h2 className="text-lg sm:text-4xl reenie-beanie-regular">
          Welcome to the official website of Crossing i's Dotting t's. Discover
          our latest music, videos, tour dates, and more!
        </h2>
        <h3 className="text-xl">&darr;</h3>
      </motion.h1>
    </LampContainer>
  );
}
