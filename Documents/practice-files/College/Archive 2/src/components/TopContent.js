import React, { useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink, HashLink as HLink } from "react-router-hash-link";
import { SocialIcon } from "react-social-icons";
// import
import space from "../../src/components/assets/space-bg.png";
import moment from "moment";

const TopContent = ({ isOpen }) => {
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <div className='hero ' id='hero'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -400 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className='to relative z-[1000000000] xs:bottom-10 bottom-32 top-[460px] left-[50%] translate-x-[-50%] w-fit flex justify-center items-center'
      >
        <HashLink to='/#about' smooth>
          <div className='border-white w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 mb-1 bg-white rounded-full bg-secondary'
            />
          </div>
        </HashLink>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -400 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className='social '
      >
        <SocialIcon
          style={{ borderRadius: 50, height: 36, width: 36 }}
          id='ic'
          fgColor='#0dff00'
          bgColor='transparent'
          url='https://www.instagram.com/tantrotsav_avv/'
        />
        <SocialIcon
          style={{ borderRadius: 50, height: 36, width: 36 }}
          id='ic'
          fgColor='#0dff00'
          bgColor='transparent'
          url='https://twitter.com/'
        />
        <SocialIcon
          style={{ borderRadius: 50, height: 36, width: 36 }}
          id='ic'
          fgColor='#0dff00'
          bgColor='transparent'
          url='https://www.amrita.edu/events/tantrotsav-2023'
        />
      </motion.div>
      <div
        id='intro'
        className=' max-w-7xl mt-[-236px] mx-auto intro z-50 flex justify-between items-center h-full w-full p-[140px]'
      >
        <div className='absolute ani  w-72 h-72 left-[600px] bg-blue-600 rounded-full mix-blend-lighten filter blur-xl opacity-70 animate-blob'></div>
        <div className='absolute ani left-[700px] w-72 h-72 bg-pink-600 rounded-full mix-blend-lighten filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
        <div className='absolute ani left-[500px] w-72 h-72 bg-green-600 rounded-full mix-blend-lighten filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
        <div className='absolute ani left-[800px] w-72 h-72 bg-orange-600 rounded-full mix-blend-lighten filter blur-xl opacity-70 animate-blob animation-delay-6000'></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -400 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className='flex-1 '
          id='hero-section'
        >
          <h1
            id='title'
            className='title-text text-[#0dff00] tracking-[3px] text-[60px] p-3 font-bold'
          >
            Tantrotsav'23
          </h1>
          <h1
            id='hero-p'
            className='hero-p p-3 text-[10px] mt-[-10px] text-white tracking-wide'
          >
            Welcome to Tantrotsav'23, the National Level Techfest of Amrita
            Vishwa Vidyapeetham, Chennai. We are glad to announce that
            Tantrotsav'23 will be held from 24th to 25th March 2023. We invite
            you to be a part of this event and make it a grand success.
          </h1>
          <div className='btns'>
            {moment().format("YYYY-MM-DD, h:mm:ss a") <
            "2023-03-13, 5:00:00 pm" ? (
              <button
                className='reg ml-4'
                onClick={() =>
                  alert("Registration will start from 13th March 2023, 5 pm")
                }
              >
                Register Now
              </button>
            ) : (
              <Link to='/register'>
                <button className='reg ml-4'>Register Now</button>
              </Link>
            )}

            <br />
            <br />
            <br />

            {/* <h2 className='hero-p p-3 text-[10px] mt-[-10px] text-white tracking-wide'>
              Hey, the registration starts from March 13th Monday onwards.
            </h2> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -400 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className='svg-sec '
        >
          {!isOpen ? (
            // <img
            //   className="img-h"
            //   src="https://tri-nit.com/landing_page_vector.svg"
            //   alt="pic"
            // />
            <img className='space ' src={space} alt='pic' />
          ) : (
            ""
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TopContent;
