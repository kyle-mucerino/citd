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
          content="Crossing i's Dotting t's, band, rock music,grunge music, crossing i's dotting t's band, crossing i's dotting t's music"
        />
        <link rel="canonical" href="https://cidtband.com" />
      </Helmet>

      {/* Page Content */}
      <LampDemo />
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <AnimatedTestimonialsDemo />
        <CanvasRevealEffectDemo />
      </div>
    </div>
  );
};

export default Home;
