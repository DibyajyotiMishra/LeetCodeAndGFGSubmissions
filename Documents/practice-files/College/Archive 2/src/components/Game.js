import React from "react";
import "./Game.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink as HLink } from "react-router-hash-link";
import Slider from "react-slick";
import COD from "./assets/COD.png";
import valo from "./assets/val.png";
import overwatch from "./assets/Overwatch.png";
import coc from "./assets/coc.png";
import fall from "./assets/fall.png";
import ParticleBackground from "./ParticleBackground";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [COD, coc, valo, overwatch, fall];

function Game() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        {/* <FaArrowRight /> */}
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        {/* <FaArrowLeft /> */}
      </div>
    );
  };

  const [ImageIndex, setImageIndex] = useState(0);

  const settings = {
    // variableWidth: true,
    // responsive: [1, 2, 3],
    autoplay: true,
    autoplaySpeed: 3000,
    mobileFirst: true,
    dots: true,
    showIndicator: false,
    infinite: true,
    lazyLoad: true,
    speed: 30,
    slidesToShow: 3,
    slidesToScroll: 1,
    centreMode: true,
    centrePadding: "60px",
    pauseOnFocus: false,
    pauseOnHover: false,
    // controller: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows:false,
    fade: true,

    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="outgame">
      <ParticleBackground />
      <div className="txt">
        <h1
          id="title"
          className="title-text text-[tomato] text-[30px] p-3 font-bold"
        >
          Game Jam
        </h1>
        <h1 className="gametxt text-[30px] text-red tracking-wide">
          Welcome to Tantrotsav'23, the National Techfest of Amrita Vishwa
          Vidyapeetham, Chennai. We are glad to announce that Tantrotsav'23 will
          be held from 26th to 27th March 2023. We invite you to be a part of
          this event and make it a grand success.
        </h1>
      </div>
      <div className="game">
        <Slider className="slider" {...settings}>
          {images.map((img, idx) => (
            <div
              className={idx === ImageIndex ? "slide activeSlide " : "slide"}
            >
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Game;
