import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";
import gMap from "../../src/components/assets/google-maps.png";

const Footer = () => {
  return (
    <footer id='contact'>
      <div className='h-[270px] w-[100%] bg-gray-800'>
        <div className='p-10'>
          <h1 className='text-center'>Made with 💖 by Tech Team</h1>
          <h1 className='text-center mt-2'>
            2023@copyright All rights are reserved
          </h1>
        </div>
        {/* <div className='flex gap-5 items-center justify-center'>
          <div className='flex flex-col items-center gap-2'>
            <a href='https://goo.gl/maps/uC66BvzfBZdJUewQ9'>
              <img src={gMap} alt='map' className='h-[30px] w-[30px]' />
            </a>
            <h1>Google Maps</h1>
          </div>
          {/* <img src={gMap} alt="map" className="h-[30px] w-[30px]" />
          <img src={gMap} alt="map" className="h-[30px] w-[30px]" />
          <img src={gMap} alt="map" className="h-[30px] w-[30px]" /> */}
        {/* </div>  */}
      </div>
    </footer>
  );
};
export default Footer;
