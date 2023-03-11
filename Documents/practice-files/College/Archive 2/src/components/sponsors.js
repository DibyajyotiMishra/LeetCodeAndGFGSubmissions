import React from "react";
import Slider from "react-slick";
import COD from "./assets/COD.png";
import valo from "./assets/val.png";
import Rel from "./assets/Rel.png";
import MS from "./assets/MS.png";
import fall from "./assets/fall.png";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Game.css";

const images = [COD, MS, valo, Rel, fall];

export default function Sponsors() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };
  const [ImageIndex, setImageIndex] = useState(0);

  const settings = {
    // variableWidth: true,
    // responsive: [1, 2, 3],
    className: "center",
    autoplay: true,
    autoplaySpeed: 5000,
    mobileFirst: true,
    dots: true,
    showIndicator: true,
    infinite: true,
    lazyLoad: true,
    speed: 30,
    slidesToShow: 3,
    slidesToScroll: 1,
    centreMode: true,
    centrePadding: "60px",
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable: false,
    controller: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: false,
    fade: false,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          mobileFirst: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          mobileFirst: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          mobileFirst: true,
          dots: false,
          fade: true,
        },
      },
    ],
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="bg-black h-screen">
      <div className="max-w-7xl mx-auto sm:p-[50px] p-[30px]" id="about">
        <h1 className="text-white pt-[80px] pb-[150px] font-bold sm:text-[50px] text-[40px] text-center">
          Sponsors
        </h1>
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
