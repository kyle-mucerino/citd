import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { LampDemo } from "./lampDemo";
import band from "./assets/homepage2.jpg";
import logo from "./assets/logo3.webp";
import tacoFest from "./assets/tacoFest.jpeg";
import logo1 from "./assets/logo.jpeg";
import logo2 from "./assets/logo2.jpeg";
import logo2black from "./assets/logo2black.jpeg";
import logo2blue from "./assets/logo2blue.png";
import logo2grey from "./assets/logo2grey.jpeg";
import logo3 from "./assets/logo3.webp";
import logo4 from "./assets/logo4.webp";
import cassette from "./assets/cassette.png";
import flyer01 from "./assets/flyer01.png";


const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      console.log("Response Data:", data); 

      if (response.ok && data.msg === "Successfully subscribed!") {
        setMessage("Thank you for subscribing!");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error); 
      setMessage("An error occurred. Please try again later.");
    }
    setEmail("");
  };
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
        <div className="hidden sm:flex flex-row space-x-4 justify-end text-white uppercase text-md sm:text-2xl font-bold mr-2 sm:mr-4 pt-1">
          <a href="#merch">merch</a>
          <p>|</p>
          <a href="#music">music</a>
          <p>|</p>
          <a href="#shows">shows</a>
        </div>
        <div className="flex flex-col p-2 items-center space-y-12 sm:space-y-0">
          <img
            className="flex sm:h-screen"
            src={band}
            alt="full band posing"
          ></img>
          <img className="flex sm:hidden" src={logo} alt="logo"></img>
          <div className="text-center" id="merch">
            <h3 className="text-2xl custom:text-6xl p-2 uppercase mb-4 poppins-medium rounded-lg text-white">
              Subscribe to our newsletter
            </h3>
            <form onSubmit={handleSubmit} className="flex justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="p-2 text-black rounded-l-lg text-xl custom:text-4xl poppins-medium w-2/3 sm:w-3/5"
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-r-lg text-xl custom:text-4xl poppins-medium"
              >
                Subscribe
              </button>
            </form>
            {message && (
              <p className="mt-4 text-white text-xl uppercase bg-orange-600 rounded-lg w-1/2 mx-auto">
                {message}
              </p>
            )}
          </div>
          {/* <LampDemo /> */}
          <div className="flex flex-row space-x-1 mt-4 p-2 sm:p-4">
            <img
              className="h-1/5 rounded-full w-1/5 my-auto"
              alt="Crossing i's Dotting t's logo"
              src={logo2black}
            />
            <img
              className="h-1/5 rounded-full w-1/5 my-auto"
              alt="Crossing i's Dotting t's logo"
              src={logo1}
            />
            <img
              className="h-1/5 rounded-lg w-1/5 my-auto"
              alt="Crossing i's Dotting t's logo"
              src={logo3}
            />
            <img
              className="h-1/5 rounded-full w-1/5 my-auto"
              alt="Crossing i's Dotting t's logo"
              src={cassette}
            />
            <img
              className="h-1/5 rounded-full w-1/5 my-auto"
              alt="Crossing i's Dotting t's logo"
              src={logo2blue}
            />
          </div>
          <div className="flex flex-col text-center">
            <a
              className="text-2xl custom:text-6xl p-2 sm:p-4 uppercase mb-2 sm:mb-4 poppins-medium rounded-lg text-white border-white border-4 hover:scale-105 transition-transform duration-300 mt-2 sm:mt-8"
              href="https://crossingtsdottingis.bandcamp.com/merch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click me for Merch store
            </a>
          </div>
        </div>
        <div className="flex flex-row w-full" id="music">
          <iframe
            className="w-full aspect-video sm:p-2"
            src="https://www.youtube.com/embed/iSjPbjrwm7w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-center">
          <h3 className="text-3xl custom:text-6xl p-2 uppercase poppins-medium text-white my-2 sm:my-4">
            Come see us play
          </h3>
          <img
            className="flex sm:p-4 sm:h-4/5 sm:w-4/5 mx-auto"
            src={flyer01}
            alt="flyer for Crossing i's Dotting t's"
          />
        </div>
        <div
          className="flex flex-col text-center space-y-4 sm:space-y-8 p-4 w-full sm:w-3/4
          mx-auto bg-slate-300 text-black rounded-lg"
          id="shows"
        >
          <h1 className=" text-3xl custom:text-6xl uppercase poppins-medium">
            tickets
          </h1>
          <a
            href="https://www.eventbrite.com/e/bloodlines-confessions-of-a-traitor-lightworker-tickets-1277284354889"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-xl leading-loose custom:text-4xl uppercase poppins-medium rounded-lg mx-auto underline decoration-4 underline-offset-8">
              Summer fox brewing | Fresno, CA | 6/27
            </p>
          </a>
          <a
            href="https://www.brownpapertickets.com/event/6655257"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className=" text-xl custom:text-4xl uppercase poppins-medium rounded-lg mx-auto underline decoration-4 underline-offset-8">
              Taco fest | Richmond, CA | 6/28
            </p>
          </a>
          <a
            href="https://dice.fm/event/pyam2y-crossing-is-dotting-ts-silent-vice-rain-on-fridays-9th-jul-soda-bar-san-diego-tickets?lng=en-US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className=" text-xl custom:text-4xl uppercase poppins-medium rounded-lg mx-auto underline decoration-4 underline-offset-8">
              Soda Bar | San Diego | 7/9
            </p>
          </a>
        </div>
        <div className="text-center sm:p-4">
          Find our hidden message if you can muah hahahahahhaha
        </div>
      </div>
    </>
  );
};

export default Home;
