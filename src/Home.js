import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { CanvasRevealEffectDemo } from "./CanvasRevealEffectDemo";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";
import { LampDemo } from "./lampDemo";
import band from "./assets/homepage2.jpg";
import logo from "./assets/logo3.webp";
import logoWhite from "./assets/logo3.webp";

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
                className="p-2 text-black rounded-l-lg text-xl custom:text-4xl poppins-medium"
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
