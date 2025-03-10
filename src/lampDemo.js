"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";
import vortexLogo from "./assets/logo3.webp";
import homepage from "./assets/homepage.jpg";

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
        <img className="" alt="Crossing i's Dotting t's logo" src={vortexLogo} />
        <div className="text-5xl reenie-beanie-regular">Explore More</div>
        <div className="text-xl">&darr;</div>
      </motion.h1>
    </LampContainer>
  );
}
