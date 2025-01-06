import React from "react";
import { Helmet } from "react-helmet-async";
import { CanvasRevealEffectDemo } from "./CanvasRevealEffectDemo";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";
import { LampDemo } from "./lampDemo";

const Home = () => {
  return (
    <div className="bg-black">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Crossing i's Dotting t's - Official Band Website</title>
        <meta
          name="description"
          content="Welcome to the official website of Crossing i's Dotting t's. Discover our music, read testimonials, and explore unique content."
        />
        <meta
          name="keywords"
          content="Crossing i's Dotting t's, band, music, testimonials, creative effects"
        />
        <link rel="canonical" href="https://cidtband.com" />
      </Helmet>

      {/* Page Content */}
      <LampDemo />
      <AnimatedTestimonialsDemo />
      <CanvasRevealEffectDemo />
    </div>
  );
};

export default Home;
