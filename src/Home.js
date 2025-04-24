import React from "react";
import { Helmet } from "react-helmet-async";
import { CanvasRevealEffectDemo } from "./CanvasRevealEffectDemo";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";
import { LampDemo } from "./lampDemo";
import band from "./assets/homepage2.jpg";
import logo from "./assets/logo3.webp"

const Home = () => {
  return (
    <>
      <div className="">
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
        {/* <LampDemo />
        <div className="flex flex-col sm:flex-row justify-center items-center">
        <AnimatedTestimonialsDemo />
        <CanvasRevealEffectDemo />
        </div> */}
      </div>
      <div className="bg-black">
        <div className="flex flex-col p-4 items-center space-y-20 sm:space-y-0">
          <img className="h-full sm:h-screen" src={band} alt="full band posing"></img>
          <img className="flex sm:hidden" src={logo} alt="logo"></img>
          <LampDemo />
          <div className="flex flex-row w-full">
            <iframe
              className="w-full aspect-video sm:p-2"
              src="https://www.youtube.com/embed/quGjvowgqaI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
