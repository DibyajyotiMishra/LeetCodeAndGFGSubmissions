import React from "react";
import Tilt from "react-tilt";
import { HashLink as HLink } from "react-router-hash-link";
import asc from "../../src/components/assets/asc.png";
import ase from "../../src/components/assets/ase.png";
import c20 from "../../src/components/assets/c20.png";
const Card = ({ title, logo, para }) => {
  return (
    <Tilt className="bg-tertiary  border-[1px] border-[green-pink-gradient]  shadow-card rounded-[5px] h-[500px] w-[300px]">
      <div className="w-full p-[20px]">
        <h1 className="text-center text-white font-bold text-[40px]">
          {title}
        </h1>
        <div className="mt-10">
          <img
            src={logo}
            alt="asc"
            className="rounded-full h-[150px] w-[150px] block mx-auto"
          />
          <p className=" text-white text-[16px] text-justify mt-10">{para}</p>
          <div className="flex justify-center items-center mt-4">
            <HLink smooth to="/events">
              <button className="button-49" role="button">
                View More
              </button>
            </HLink>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

function EventsSilder() {
  return (
    <div id="event" className="w-full bg-black ">
      <div className="max-w-7xl mx-auto sm:p-[80px] p-[30px]" id="about">
        <h1 className="text-[#5f0] font-bold sm:text-[50px] text-[40px] text-center">
          EVENTS
        </h1>
        <div className="relative flex gap-5 flex-wrap justify-center mt-14">
          <Card
            title="C20"
            logo={c20}
            para=" Join us for a day of fun! It's time to take a break from screens and immerse yourself in non-technical bliss with our exciting events."
          />
          <Card
            title="ASE"
            logo={ase}
            para="Cool technical events such as robo race, 3d cad modelling, Paper prensentation and many more are conducted by the students of ASE."
          />
          <Card
            title="ASC"
            logo={asc}
            para="Technical events are the most important part of any technical fest. Here are many events in ASC which are conducted by the students of the ASC."
          />
        </div>
      </div>
    </div>
  );
}

export default EventsSilder;
