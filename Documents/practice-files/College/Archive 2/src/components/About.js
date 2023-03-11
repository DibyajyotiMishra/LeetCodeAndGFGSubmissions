import React from "react";
import Tilt from "react-tilt";
import "../about.css";

function About() {
  return (
    <div className="bg-black md:mt-14" id="aboutR">
      <div className="max-w-7xl mx-auto sm:p-[50px] p-[30px]" id="about">
        <h1 className="text-[#1aff00] text-center font-bold sm:text-[50px] text-[40px] ">
          ABOUT US
        </h1>
        <div className="">
          <Tilt className="shadow-card w-fit block mx-auto">
            <img
              id="tan-logo"
              className=" block mx-auto mt-10 h-[250px] w-[400px] rounded-lg"
              src="https://dt19wmazj2dns.cloudfront.net/wp-content/uploads/bfi_thumb/tantrotsav-2023-featured-yvh6jw3vlp1qk837ap44cg.jpg"
              alt="tantrotsav"
            />
          </Tilt>
          <p className="para text-white text-center text-[20px] mt-16">
            Tantrotsav is a technical festival. The event seeks to achieve
            communication of innovative ideas that promote the cause of the
            technological advantage among the students and also to keep them
            abreast with the latest advances in their respective fields. It also
            opens a window for the participants to interact with people from
            different backgrounds and upgrade their knowledge. The event also
            has gaming tournaments that help to booststrategic thinking,
            teamwork, communication, leadership, performance skills, and
            confidence building. A hands-on workshop helps participants to be
            more confident in the learning domain. The competition helps the
            students to become more inquisitive, research independently, and
            learn to work with others.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
