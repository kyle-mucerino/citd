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
const bgImage2 = require("./assets/band7.jpeg");

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
  }
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
        strength={500}
        bgImageStyle={{ objectFit: "cover" }}
        className=""
      >
        <header className="grid grid-cols-12">
          <img
            src={logo}
            alt="Crossing I's Dotting T's"
            className="col-start-1 col-end-6 ml-8 hidden sm:block"
          ></img>
          <nav className="col-start-1 sm:col-start-8 col-end-13 uppercase font-bold reenie-beanie-regular flex justify-evenly">
            <a
              href="https://crossing-i-s-dotting-ts.myshopify.com/"
              className="text-2xl sm:text-5xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>&rArr;merch</h3>
            </a>
            <a href="#music" className="text-2xl sm:text-5xl">
              <h3>&rArr;music</h3>
            </a>
            <a href="#shows" className="text-2xl sm:text-5xl">
              <h3>&rArr;shows</h3>
            </a>
          </nav>
        </header>
        <section className="section-1 landing-page">
          <div className="flex flex-row h-screen">
            <div className="w-full flex flex-col justify-center items-center">
              <button className="rounded-lg p-2 uppercase reenie-beanie-regular font-bold animate-colorCycle">
                <a
                  href="https://open.spotify.com/playlist/37i9dQZF1E4xJUlko28aAF"
                  className="text-2xl sm:text-7xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  listen to the new album
                </a>
              </button>
                <img
                  src={logoWhite}
                  alt="Crossing I's Dotting T's"
                  className="sm:hidden w-2/3 bg-black rounded-lg mt-2"
                ></img>
              {/* <div className="text-5xl uppercase font-bold reenie-beanie-regular bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg mt-4">
                <h2 className="p-2">Discover more...</h2>
              </div>
              <p>
                <p className="text-9xl font-bold text-white">&darr;</p>
              </p> */}
            </div>
          </div>
        </section>
      </Parallax>
      <Parallax
        bgImage={bgImage2}
        strenth={500}
        bgImageStyle={{ objectFit: "cover" }}
        className=""
      >
        <section id="videos" className="section-2 videos">
          <div className="flex flex-col p-4">
            <div className="grid grid-cols-12">
              <iframe
                className="w-full col-start-1 col-end-7 aspect-video p-2 hidden sm:block"
                src="https://www.youtube.com/embed/rvG0TKs1vu0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="w-full col-start-9 col-end-13 hidden sm:block">
                <h1
                  className="text-7xl font-bold reenie-beanie-regular p-2 rounded-lg"
                  style={{
                    background: "linear-gradient(to left, #f00, #ff0)"
                  }}
                >
                  {" "}
                  Latest Music Video
                </h1>
                <span
                  style={{
                    fontSize: "16rem",
                    position: "absolute",
                    top: "0%",
                    right: "0%"
                  }}
                  className=""
                >
                  &#8592;
                </span>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="w-full col-start-4 col-end-7 hidden sm:block">
                <h1
                  className="text-7xl font-bold reenie-beanie-regular rounded-lg p-2"
                  style={{
                    background: "linear-gradient(to left, #f00, #ff0)"
                  }}
                >
                  Latest Single
                </h1>
                <span
                  style={{
                    fontSize: "16rem",
                    position: "absolute",
                    top: "50%",
                    right: "50%"
                  }}
                >
                  &#8594;
                </span>
              </div>
              <iframe
                className="w-full col-span-12 sm:col-start-7 col-end-13 aspect-video p-2"
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
      <Parallax
        bgImageStyle={{ objectFit: "contain" }}
        strength={500}
        style={{ background: "linear-gradient(to bottom, #000000, #434343)" }}
      >
        <section id="music" className="section-3 music my-12">
          <div className="w-full flex flex-col justify-center items-center">
            <h2
              className="text-2xl sm:text-8xl uppercase font-bold p-4 reenie-beanie-regular text-black rounded-lg"
              style={{
                background: "linear-gradient(to left, #f00, #ff0)"
              }}
            >
              find us on spotify & apple music
            </h2>
            <Carousel
              showThumbs={false}
              showStatus={false}
              useKeyboardArrows
              centerMode={true}
              autoplay
              centerSlidePercentage={50}
              className="carousel-size"
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
        strength={500}
        style={{ background: "linear-gradient(to top, #000000, #434343)" }}
      >
        <section id="shows" className="shows section-4 border-b-4 border-white">
          <div className="flex justify-center mb-8">
            <h1
              className="uppercase text-black text-4xl sm:text-9xl reenie-beanie-regular p-4 font-bold rounded-lg"
              style={{
                background: "linear-gradient(to left, #f00, #ff0)"
              }}
            >
              upcoming Shows
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center text-white reenie-beanie-regular mb-8 mx-4">
            <div className="show-date-item">
              <h4 className="text-7xl font-bold">6/28</h4>
              <p className="text-4xl font-bold">
                San Diego, CA &#x21DD; Che Cafe
              </p>
            </div>
            <div className="show-date-item">
              <h4 className="text-7xl font-bold">6/29</h4>
              <p className="text-4xl font-bold">
                Davenport, IA &#x21DD; Raccoon Motel
              </p>
            </div>
            <div className="show-date-item ">
              <h4 className="text-7xl font-bold">6/30</h4>
              <p className="text-4xl font-bold">
                Ferndale, MI &#x21DD; Pug Fest @ Second Base Pub Grub
              </p>
            </div>
            <div className="show-date-item ">
              <h4 className="text-7xl font-bold">7/1</h4>
              <p className="text-4xl font-bold">
                Akron, OH &#x21DD; It's a King Thing! (W/Antighost)
              </p>
            </div>
            <div className="show-date-item ">
              <h4 className="text-7xl font-bold">7/2</h4>
              <p className="text-4xl font-bold">
                Toldeo, OH &#x21DD; Ottowa Tavern (W/Antighost)
              </p>
            </div>
            <div className="show-date-item ">
              <h4 className="text-7xl font-bold">7/3</h4>
              <p className="text-4xl font-bold">
                Cincinnati, OH &#x21DD; Northside Tavern (W/Antighost)
              </p>
            </div>
            <div className="show-date-item">
              <h4 className="text-7xl font-bold">7/4</h4>
              <p className="text-4xl font-bold">
                Kansas City, MO &#x21DD; Howdy (w/Oolong & Newgrounds Death
                Rugby)
              </p>
            </div>
            <div className="show-date-item">
              <h4 className="text-7xl font-bold">7/5</h4>
              <p className="text-4xl font-bold">
                Lawrence, KS &#x21DD; Replay Lounge
              </p>
            </div>
            <div className="show-date-item ">
              <h4 className="text-7xl font-bold">7/6</h4>
              <p className="text-4xl font-bold">
                Lincoln, NE &#x21DD; First Day Vinyl
              </p>
            </div>
            <div className="show-date-item ">
              <h4 className="text-7xl font-bold">7/10</h4>
              <p className="text-4xl font-bold">
                Los Angeles, CA &#x21DD; Moroccan Lounge
              </p>
            </div>
          </div>
        </section>
      </Parallax>
      <Parallax
        bgImageStyle={{ objectFit: "contain" }}
        strength={500}
        style={{ background: "linear-gradient(to bottom, #000000, #434343)" }}
      >
        <section id="merch" className="section-5 archives">
          <div className="flex flex-col justify-evenly">
            <div className="w-full flex flex-col justify-center items-center mt-4">
              <h2
                className="text-3xl sm:text-7xl uppercase font-bold p-4 reenie-beanie-regular text-black rounded-lg"
                style={{
                  background: "linear-gradient(to left, #f00, #ff0)"
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
                centerSlidePercentage={40}
                className="carousel-size"
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
          <h2 className="text-4xl sm:text-6xl font-bold reenie-beanie-regular uppercase">
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
