import React from "react";
import "./App.css";
import { Parallax } from "react-parallax";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsCaretRightFill } from "react-icons/bs";
import logo from "./assets/logo4.webp";
import logoWhite from "./assets/logo3.webp";

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

const bgImage1 = require("./assets/yourstruly5.jpeg");
const bgImage2 = require("./assets/yourstruly1.jpg");
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
          <nav className="col-start-1 custom:col-start-8 col-end-13 uppercase font-bold reenie-beanie-regular flex justify-evenly">
            <a
              href="https://crossing-i-s-dotting-ts.myshopify.com/"
              className="text-2xl custom:text-5xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>&rArr;merch</h3>
            </a>
            <a href="#music" className="text-2xl custom:text-5xl">
              <h3>&rArr;music</h3>
            </a>
            <a href="#shows" className="text-2xl custom:text-5xl">
              <h3>&rArr;shows</h3>
            </a>
          </nav>
        </header>
        <section className="section-1 landing-page">
          <div className="flex flex-row h-screen">
            <div className="w-full flex flex-col justify-center items-center">
              <button className="rounded-lg p-2 uppercase reenie-beanie-regular text-black font-bold animate-colorCycle">
                <a
                  href="https://open.spotify.com/artist/7eNA56CKDh8uHvdk3Dsdbc"
                  className="text-2xl custom:text-7xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  listen to the new album
                </a>
              </button>
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
          <nav className="col-start-1 custom:col-start-8 col-end-13 uppercase font-bold reenie-beanie-regular flex justify-evenly text-black mobile1:text-white">
            <a
              href="https://crossing-i-s-dotting-ts.myshopify.com/"
              className="text-3xl custom:text-5xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>&rArr;merch</h3>
            </a>
            <a href="#music" className="text-3xl custom:text-5xl">
              <h3>&rArr;music</h3>
            </a>
            <a href="#shows" className="text-3xl custom:text-5xl">
              <h3>&rArr;shows</h3>
            </a>
          </nav>
        </header>
        <section className="section-1 landing-page">
          <div className="flex flex-row">
            <div className="w-full flex flex-col justify-end teenie:justify-center items-center h-screen sm:h-auto">
              <img
                src={logoWhite}
                alt="Crossing I's Dotting T's"
                className="custom:hidden w-2/3 bg-black rounded-lg"
              ></img>
              <button className="rounded-lg p-2 uppercase reenie-beanie-regular font-bold animate-colorCycle mt-2">
                <a
                  href="https://open.spotify.com/artist/7eNA56CKDh8uHvdk3Dsdbc"
                  className="text-3xl custom:text-7xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  listen to the new album
                </a>
              </button>
              <iframe
                className="w-full aspect-video p-2"
                src="https://www.youtube.com/embed/rvG0TKs1vu0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <img src={logo2black} alt="logo 2" className="h-1/6 mobile1:hidden"></img>
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
          background: "linear-gradient(to bottom, #000428 , #004e92)"
        }}
      >
        <section id="videos" className="section-2 videos">
          <div className="flex flex-col p-4">
            <div className="flex flex-row">
              <iframe
                className="w-full aspect-video p-2 hidden custom:block"
                src="https://www.youtube.com/embed/rvG0TKs1vu0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <div className="w-2/3 flex-col hidden custom:block">
                <div>
                  <h1
                    className="text-7xl text-black font-bold reenie-beanie-regular p-2 rounded-lg text-center"
                    style={{
                      background: "linear-gradient(to left, #fe8c00,#f83600)"
                    }}
                  >
                    {" "}
                    &#8592;Latest Music Video
                  </h1>
                </div>
                <div>
                  <img
                    src={logo2}
                    alt="logo"
                    className="h-72 mt-12 ml-36 rounded-3xl"
                  ></img>
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-12">
              <div className="w-3/5 flex-col hidden custom:block text-center">
                <h1
                  className="text-7xl text-black font-bold reenie-beanie-regular rounded-lg p-2"
                  style={{
                    background: "linear-gradient(to left, #fe8c00,#f83600)"
                  }}
                >
                  Latest Single &#9834; &#8594;
                </h1>
                <div>
                  <img
                    src={logo5}
                    alt="logo"
                    className="h-72 mt-12 ml-36 rounded-3xl"
                  ></img>
                </div>
              </div>
              <iframe
                className="w-full col-span-12 custom:col-start-7 col-end-13 aspect-video p-2"
                src="https://www.youtube.com/embed/akLPERuJNV4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </Parallax>
      {/* <section id="videos" className="mobile-2 sm:hidden">
        <div className="flex flex-col p-4 h-screen justify-evenly">
          <iframe
            className="w-full aspect-video p-2"
            src="https://www.youtube.com/embed/rvG0TKs1vu0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full aspect-video p-2"
            src="https://www.youtube.com/embed/akLPERuJNV4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section> */}
      <Parallax
        bgImageStyle={{ objectFit: "contain" }}
        strength={300}
        style={{
          background: "linear-gradient(to top, #000428 , #004e92)"
        }}
      >
        <section id="music" className="section-3 music my-12">
          <div className="w-full flex flex-col justify-center items-center">
            <h2
              className="tiny:text-5xl text-4xl custom:text-7xl uppercase font-bold p-4 reenie-beanie-regular text-black rounded-lg text-center"
              style={{
                background: "linear-gradient(to left, #fe8c00,#f83600)"
              }}
            >
              Find us on Spotify <br></br> & Apple Music
            </h2>
            <Carousel
              showThumbs={false}
              showStatus={false}
              useKeyboardArrows
              centerMode={true}
              centerSlidePercentage={50}
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
          background: "linear-gradient(to bottom, #000428 , #004e92)"
        }}
      >
        <section id="shows" className="shows section-4 border-b-4 border-white">
          <div className="flex justify-center mb-8">
            <h1
              className="uppercase text-black text-5xl custom:text-7xl reenie-beanie-regular p-4 font-bold rounded-lg"
              style={{
                background: "linear-gradient(to left, #fe8c00,#f83600)"
              }}
            >
              upcoming Shows
            </h1>
          </div>
          <div className="grid grid-cols-1 custom:grid-cols-2 gap-4 text-center text-white reenie-beanie-regular mb-8 mx-4">
            <div className="show-date-item">
              <h4 className="text-7xl font-bold">8/24</h4>
              <p className="text-4xl font-bold">
                Boyle Heights, Los Angeles, CA &#x21DD; RSVP Locations TBA
              </p>
              <a
                href="https://linktr.ee/Crossingisdottingts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-black text-2xl font-bold rounded hover:bg-yellow-500"
              >
                Get Tickets
              </a>
            </div>
            <div className="show-date-item">
              <h4 className="text-7xl font-bold">9/5</h4>
              <p className="text-4xl font-bold">
                Ventura, CA &#x21DD; The Twist
              </p>
              <a
                href="https://linktr.ee/Crossingisdottingts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-black text-2xl font-bold rounded hover:bg-yellow-500"
              >
                Get Tickets
              </a>
            </div>
            <div className="show-date-item">
              <h4 className="text-7xl font-bold">10/17</h4>
              <p className="text-4xl font-bold">
                San Jose, CA &#x21DD; Location TBA
              </p>
              <a
                href="https://linktr.ee/Crossingisdottingts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-black text-2xl font-bold rounded hover:bg-yellow-500"
              >
                Get Tickets
              </a>
            </div>
            <div className="show-date-item">
              <h4 className="text-7xl font-bold">10/18</h4>
              <p className="text-4xl font-bold">
                Sacramento, CA &#x21DD; Old Ironsides
              </p>
              <a
                href="https://linktr.ee/Crossingisdottingts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-black text-2xl font-bold rounded hover:bg-yellow-500"
              >
                Get Tickets
              </a>
            </div>
            <div className="show-date-item">
              <h4 className="text-7xl font-bold">10/19</h4>
              <p className="text-4xl font-bold">
                Lodi, CA &#x21DD; Wildwood Skateshop
              </p>
              <a
                href="https://linktr.ee/Crossingisdottingts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-black text-2xl font-bold rounded hover:bg-yellow-500"
              >
                Get Tickets
              </a>
            </div>
            <div className="show-date-item">
              <h4 className="text-7xl font-bold">10/20</h4>
              <p className="text-4xl font-bold">
                Richmond, CA &#x21DD; Prop Shop (Twin Shrieks Fest)
              </p>
              <a
                href="https://linktr.ee/Crossingisdottingts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-black text-2xl font-bold rounded hover:bg-yellow-500"
              >
                Get Tickets
              </a>
            </div>
          </div>
        </section>
      </Parallax>
      <Parallax
        bgImageStyle={{ objectFit: "contain" }}
        strength={300}
        style={{
          background: "linear-gradient(to top, #000428 , #004e92)"
        }}
      >
        <section id="merch" className="section-5 archives">
          <div className="flex flex-col justify-evenly">
            <div className="w-full flex flex-col justify-center items-center mt-8">
              <h2
                className="text-5xl custom:text-7xl uppercase font-bold p-4 reenie-beanie-regular text-black rounded-lg"
                style={{
                  background: "linear-gradient(to left, #fe8c00,#f83600)"
                }}
              >
                Archives
              </h2>
              <Carousel
                showThumbs={false}
                showStatus={false}
                useKeyboardArrows
                centerMode={true}
                autoplay
                centerSlidePercentage={70}
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
      <footer className="bg-black border-t-4 border-white text-white py-6">
        <div className="text-center flex items-center justify-center space-x-2 mb-4">
          <h2 className="text-4xl custom:text-6xl font-bold reenie-beanie-regular uppercase">
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
