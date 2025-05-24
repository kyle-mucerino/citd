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
        <div className="flex flex-col p-4 items-center space-y-20 sm:space-y-0">
          <img
            className="flex sm:h-screen"
            src={band}
            alt="full band posing"
          ></img>
          <img className="flex sm:hidden" src={logo} alt="logo"></img>
          <div className="text-center">
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
          <div className="flex flex-row space-x-1 mt-4">
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
          <div className="flex flex-row w-full">
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
            <h3 className="text-3xl custom:text-6xl p-2 uppercase poppins-medium text-white">
              Come see us play
            </h3>
          <a
            href="https://www.brownpapertickets.com/event/6655257"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="flex sm:p-8 sm:h-4/5 sm:w-4/5 mx-auto hover:scale-105 transition-transform duration-300"
              src={tacoFest}
              alt="taco fest lineup"
            />
          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
