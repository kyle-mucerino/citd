"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import logo from "./assets/newLogo.png"; 
import logo2 from "./assets/logo3.webp";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8 uppercase">
        {/* <Card title="Merchandise">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card> */}
        <Card title="Upcoming Shows 
        - 2/14 Coachella Valley - Music House Indio (Opening for Man Overboard & Handguns)">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249]
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        {/* <Card title="Latest Music & Media">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card> */}
      </div>
    </>
  );
}

const Card = ({ title, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] sm:w-[32rem] w-full mx-auto p-4 relative h-[30rem]"
    >
      <img
        src={logo2}
        alt={`${title} logo`}
        className="absolute h-8 w-8 -top-3 -left-3"
      />
      <img
        src={logo2}
        alt={`${title} logo`}
        className="absolute h-8 w-8 -bottom-3 -left-3"
      />
      <img
        src={logo2}
        alt={`${title} logo`}
        className="absolute h-8 w-8 -top-3 -right-3"
      />
      <img
        src={logo2}
        alt={`${title} logo`}
        className="absolute h-8 w-8 -bottom-3 -right-3"
      />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <a
        className="relative z-2 cursor-pointer"
        href="https://linktr.ee/Crossingisdottingts"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center fading flex-col">
          <div className="text-white mb-1 reenie-beanie-regular text-2xl">
            click for details!
          </div>
          <img
            src={logo}
            alt={`${title} logo`}
            className="h-44 w-44 group-hover/canvas-card:opacity-100 rounded-full"
          />
        </div>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 mt-8 text-2xl sm:text-3xl">
          {title}
        </h2>
      </a>
    </div>
  );
};
