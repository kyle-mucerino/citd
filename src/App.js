import React, { useState } from "react";
import "./App.css";
import { Parallax } from "react-parallax";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsCaretRightFill } from "react-icons/bs";
import logo from "./assets/logo3.webp";
import logoWhite from "./assets/logo3.webp";
import mobileLogo from "./assets/newLogo2.png";

const icons = [
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/crossingisdottingtsband/"
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/cidtband?lang=en"
  },
  {
    icon: FaYoutube,
    link: "https://www.youtube.com/channel/UCGVi1VI2SA06eYTqf--LyXQ"
  }
];

const bgImage1 = require("./assets/yourstruly1.jpg");
const logo5 = require("./assets/logo.jpeg");
const logo2 = require("./assets/logo2.jpeg");
const logo2black = require("./assets/logo2black.jpeg");
// const bgImage2 = require("./assets/band7.jpeg");

const albumPosters = [
  {
    src: require("./assets/poster1.jpeg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/poster2.jpeg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/poster3.jpeg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/poster4.jpeg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/poster5.jpeg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
];

const liveShows = [
  {
    src: require("./assets/yourstruly1.jpg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/magPic.png"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/yourstruly2.jpg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/yourstruly6.jpeg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/LivePic1.jpeg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/live5.webp"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/Live3.png"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/live4.jpeg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/shirtlessYankee.png"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
];

const merchandise = [
  {
    src: require("./assets/spotify1.jpeg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/spotify2.jpeg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/spotify3.jpeg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/spotify4.jpeg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  },
  {
    src: require("./assets/spotify5.jpeg"),
    link: "https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
  }
];



const App = () => {
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
      console.log("Response Data:", data); // Debugging line to check what you get

      if (response.ok && data.msg === "Successfully subscribed!") {
        setMessage("Thank you for subscribing!");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error); // Debugging line
      setMessage("An error occurred. Please try again later.");
    }
    setEmail("");
  };

  return (
    <article className="">
      <Parallax
        bgImage={bgImage1}
        strength={200}
        bgImageStyle={{ objectFit: "cover" }}
        className="bg1 hidden custom:block"
      >
        <header className="grid grid-cols-12">
          <img
            src={logo}
            alt="Crossing I's Dotting T's"
            className="col-start-1 col-end-6 ml-8 hidden custom:block"
          ></img>
          <nav className="col-start-1 custom:col-start-8 col-end-13 uppercase poppins-medium flex justify-evenly text-white">
            <a
              href="https://crossing-i-s-dotting-ts.myshopify.com/"
              className="text-2xl custom:text-4xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>&rArr;merch</h3>
            </a>
            <a href="#music" className="text-2xl custom:text-4xl">
              <h3>&rArr;music</h3>
            </a>
            <a href="#shows" className="text-2xl custom:text-4xl">
              <h3>&rArr;shows</h3>
            </a>
          </nav>
        </header>
        <section className="section-1 landing-page">
          <div className="flex flex-row h-screen">
            <div className="w-full flex flex-col justify-center items-center">
              {/* Newsletter Subscription Section */}
              <div className="text-center">
                <h3 className="text-2xl custom:text-6xl p-2 uppercase mb-4 poppins-medium animate-colorCycle rounded-lg">
                  Subscribe to our newsletter
                </h3>
                <form onSubmit={handleSubmit} className="flex justify-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="p-2 text-black rounded-l-lg text-2xl custom:text-4xl poppins-medium"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded-r-lg text-2xl custom:text-4xl poppins-medium"
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
              <img
                src={logoWhite}
                alt="Crossing I's Dotting T's"
                className="custom:hidden w-2/3 bg-black rounded-lg mt-2"
              ></img>
            </div>
          </div>
        </section>
      </Parallax>
      <div className="custom:hidden mobile-1">
        <header className="grid grid-cols-12">
          <nav className="col-start-1 custom:col-start-8 col-end-13 uppercase poppins-medium flex justify-evenly text-white mobile1:text-white">
            <a
              href="https://crossing-i-s-dotting-ts.myshopify.com/"
              className="text-2xl custom:text-4xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>&rArr;merch</h3>
            </a>
            <a href="#music" className="text-2xl custom:text-4xl">
              <h3>&rArr;music</h3>
            </a>
            <a href="#shows" className="text-2xl custom:text-4xl">
              <h3>&rArr;shows</h3>
            </a>
          </nav>
        </header>
        <section className="section-1 landing-page">
          <div className="flex flex-row">
            <div className="w-full flex flex-col justify-end  items-center h-screen sm:h-auto">
              <img
                src={logoWhite}
                alt="Crossing I's Dotting T's"
                className="custom:hidden w-2/3 bg-black rounded-lg"
              ></img>
              {/* Newsletter Subscription Section */}
              <div className="text-center">
                <h3 className="text-2xl custom:text-6xl p-2 uppercase mb-4 poppins-medium animate-colorCycle rounded-lg hidden">
                  Subscribe to our newsletter
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="flex justify-center mt-2"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="p-2 text-black rounded-l-lg text-xl custom:text-4xl poppins-medium w-3/5 border-black border-2"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded-r-lg text-2xl custom:text-4xl poppins-medium border-black border-2"
                  >
                    Subscribe
                  </button>
                </form>
                {message && (
                  <p className="mt-4 text-white text-xl uppercase bg-orange-600 rounded-lg w-full custom:w-1/2 mx-auto">
                    {message}
                  </p>
                )}
              </div>
              <iframe
                className="w-full aspect-video p-2"
                src="https://www.youtube.com/embed/quGjvowgqaI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <img
                src={mobileLogo}
                alt="logo 2"
                className="h-1/5 mobile1:hidden"
              ></img>
            </div>
          </div>
        </section>
      </div>
      <Parallax
        // bgImage={bgImage2}
        strength={300}
        bgImageStyle={{ objectFit: "cover" }}
        className="hidden custom:block"
        style={{
          background: "black"
        }}
      >
        <section id="videos" className="section-2 videos">
          <div className="flex flex-col p-4 items-center">
            <div className="flex flex-row w-2/3">
              <iframe
                className="w-full aspect-video p-2 hidden custom:block"
                src="https://www.youtube.com/embed/quGjvowgqaI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* <div className="w-2/3 flex-col hidden custom:block">
                <div>
                  <h1
                    className="text-7xl text-white poppins-medium p-2 rounded-lg text-center"
                    style={{
                      background: "transparent"
                    }}
                  >
                    {" "}
                    &#8592;Latest Music Video
                  </h1>
                </div>
              </div> */}
            </div>
            <div className="flex justify-center items-center">
              <img
                src={mobileLogo}
                alt="logo"
                className="h-72 mt-12 ml-36 rounded-full"
              ></img>
            </div>
            <div className="flex flex-row mt-12 w-2/3 items-center">
              {/* <div className="w-3/5 flex-col hidden custom:block text-center">
                <h1
                  className="text-6xl text-white poppins-medium rounded-lg p-2"
                  style={{
                    background: "transparent"
                  }}
                >
                  Far Away Music Video&#8594;
                </h1>
              </div> */}
              <iframe
                className="w-full col-span-12 custom:col-start-7 col-end-13 aspect-video p-2"
                src="https://www.youtube.com/embed/rvG0TKs1vu0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </Parallax>
      <Parallax
        bgImageStyle={{ objectFit: "contain" }}
        strength={300}
        style={{
          background: "black"
        }}
      >
        <section id="music" className="section-3 music my-12">
          <div className="w-full flex flex-col justify-center items-center">
            <h2
              className="tiny:text-5xl text-4xl custom:text-5xl uppercase p-4 poppins-medium text-black rounded-lg text-center"
              style={{
                background: "linear-gradient(to left, #fe8c00,#f83600)"
              }}
            >
              Find us on Spotify <br></br> & Apple Music
            </h2>
            <Carousel
              selectedItem={2}
              showThumbs={false}
              showStatus={false}
              useKeyboardArrows
              centerMode={true}
              centerSlidePercentage={25}
              className="carousel-size-1 hidden sm:block w-screen"
            >
              {merchandise.map((item, index) => (
                <div key={index} className="carousel-item-size">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.src} alt={`Merchandise ${index + 1}`} />
                  </a>
                </div>
              ))}
            </Carousel>
            <Carousel
              showThumbs={false}
              showStatus={false}
              useKeyboardArrows
              centerMode={true}
              centerSlidePercentage={100}
              className="carousel-size-1 sm:hidden w-screen"
            >
              {merchandise.map((item, index) => (
                <div key={index} className="carousel-item-size">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.src} alt={`Merchandise ${index + 1}`} />
                  </a>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </Parallax>
      <Parallax
        bgImageStyle={{ objectFit: "contain" }}
        strength={300}
        style={{
          background: "black"
        }}
      >
        <section id="shows" className="shows section-4 border-b-4 border-white">
          <div className="flex justify-center mb-8">
            <h1
              className="uppercase text-black text-4xl custom:text-7xl poppins-medium p-4 rounded-lg"
              style={{
                background: "linear-gradient(to left, #fe8c00,#f83600)"
              }}
            >
              upcoming Shows
            </h1>
          </div>
          <div className="show-date-item flex justify-center my-12">
            <h4 className="text-6xl text-white">Check Back for More Dates Soon!</h4>
          </div>

          {/* <div className="grid grid-cols-1 custom:grid-cols-2 gap-4 text-center text-white poppins-medium mb-8 mx-4">
            <div className="show-date-item">
              <h4 className="text-6xl">9/5</h4>
              <p className="text-3xl">Ventura, CA &#x21DD; The Twist</p>
              <a
                href="https://linktr.ee/Crossingisdottingts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-black text-2xl rounded hover:bg-yellow-500"
              >
                Get Tickets
              </a>
            </div>
            <div className="show-date-item">
              <h4 className="text-6xl">10/17</h4>
              <p className="text-3xl">San Jose, CA &#x21DD; Location TBA</p>
              <a
                href="https://linktr.ee/Crossingisdottingts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-black text-2xl rounded hover:bg-yellow-500"
              >
                Get Tickets
              </a>
            </div>
            <div className="show-date-item">
              <h4 className="text-6xl">10/18</h4>
              <p className="text-3xl">Sacramento, CA &#x21DD; Old Ironsides</p>
              <a
                href="https://www.seetickets.us/event/crossing-is-dotting-ts/621654"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-black text-2xl rounded hover:bg-yellow-500"
              >
                Get Tickets
              </a>
            </div>
            <div className="show-date-item">
              <h4 className="text-6xl">10/19</h4>
              <p className="text-3xl">Modesto, CA &#x21DD; House of Crimes</p>
              <a
                href="https://linktr.ee/Crossingisdottingts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-black text-2xl rounded hover:bg-yellow-500"
              >
                Get Tickets
              </a>
            </div>
            <div className="show-date-item">
              <h4 className="text-6xl">10/20</h4>
              <p className="text-3xl">
                Richmond, CA &#x21DD; Prop Shop (Twin Shrieks Fest)
              </p>
              <a
                href="https://linktr.ee/Crossingisdottingts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-black text-2xl rounded hover:bg-yellow-500"
              >
                Get Tickets
              </a>
            </div>
            <div className="show-date-item">
              <h4 className="text-6xl">10/31</h4>
              <p className="text-3xl">Hollywood, CA &#x21DD; The Viper Room</p>
              <a
                href="https://www.eventbrite.com/e/dirty-mondays-presents-demi-the-daredevil-tickets-1041767864727?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-black text-2xl rounded hover:bg-yellow-500"
              >
                Get Tickets
              </a>
            </div>
          </div> */}
        </section>
      </Parallax>
      <Parallax
        bgImageStyle={{ objectFit: "contain" }}
        strength={300}
        style={{
          background: "linear-gradient(to bottom, #000000, #434343)"
        }}
      >
        <section id="merch" className="section-5 archives">
          <div className="flex flex-col justify-evenly">
            <div className="w-full flex flex-col justify-center items-center mt-8">
              <h2
                className="text-5xl custom:text-7xl uppercase p-4 poppins-medium text-black rounded-lg"
                style={{
                  background: "linear-gradient(to left, #fe8c00,#f83600)"
                }}
              >
                Archives
              </h2>
              <Carousel
                selectedItem={1}
                showThumbs={false}
                showStatus={false}
                useKeyboardArrows
                centerMode={true}
                autoplay
                centerSlidePercentage={50}
                className="carousel-size w-screen hidden sm:block"
              >
                {liveShows.map((poster, index) => (
                  <div key={index} className="carousel-item-size">
                    <a
                      href={poster.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={poster.src} alt={`Album Poster ${index + 1}`} />
                    </a>
                  </div>
                ))}
              </Carousel>
              <Carousel
                showThumbs={false}
                showStatus={false}
                useKeyboardArrows
                centerMode={true}
                autoplay
                centerSlidePercentage={100}
                className="carousel-size w-screen sm:hidden"
              >
                {liveShows.map((poster, index) => (
                  <div key={index} className="carousel-item-size">
                    <a
                      href={poster.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={poster.src} alt={`Album Poster ${index + 1}`} />
                    </a>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
        <section id="merch" className="section-5 archives">
          <div className="flex flex-col justify-evenly">
            <div className="w-full flex flex-col justify-center items-center mt-4">
              <Carousel
                selectedItem={1}
                showThumbs={false}
                showStatus={false}
                useKeyboardArrows
                centerMode={true}
                autoplay
                centerSlidePercentage={40}
                className="carousel-size-1 hidden sm:block w-screen"
              >
                {albumPosters.map((poster, index) => (
                  <div key={index} className="carousel-item-size">
                    <a
                      href={poster.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={poster.src} alt={`Album Poster ${index + 1}`} />
                    </a>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-4">
              <Carousel
                showThumbs={false}
                showStatus={false}
                useKeyboardArrows
                centerMode={true}
                autoplay
                centerSlidePercentage={100}
                className="carousel-size-1 sm:hidden w-screen"
              >
                {albumPosters.map((poster, index) => (
                  <div key={index} className="carousel-item-size">
                    <a
                      href={poster.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={poster.src} alt={`Album Poster ${index + 1}`} />
                    </a>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      </Parallax>
      <footer className="footer border-t-4 border-white text-white py-6">
        <div className="text-center flex items-center justify-center space-x-2 mb-4">
          <h2 className="text-4xl custom:text-6xl poppins-medium uppercase">
            Connect with us
          </h2>
          <BsCaretRightFill className="text-4xl" />
        </div>
        <div className="flex justify-center space-x-8">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <item.icon />
            </a>
          ))}
        </div>
      </footer>
    </article>
  );
};

export default App;
