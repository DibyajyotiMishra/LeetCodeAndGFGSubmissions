import Hamburger from "hamburger-react";
import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { name } from "@cloudinary/transformation-builder-sdk/actions/namedTransformation";
import { HashLink as HLink } from "react-router-hash-link";
import { registerWithGoogle } from "../../src/services/registerWithGoogle";
import { auth } from "../firebase";
import Avatar from "@mui/material/Avatar";

function Navbar({ isOpen, setOpen, user, setUser }) {
  const links = [
    ["Home", "/"],
    ["About", "/#about"],
    ["Events", "/events"],
    // ["FAQ", "/#faq"],
    ["Know Us", "https://www.amrita.edu/"],
    ["Contact", "#contact"],
  ];

  const handleLogin = () => {
    registerWithGoogle({ setUser });
  };

  const [openDropDown, setOpenDropDown] = React.useState(false);

  return (
    <>
      <div
        id='naving'
        className='mob z-[5000000000000] sticky top-[0] flex items-center justify-between p-5 pb-1 pt-1 backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200 bg-transparent '
      >
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -400 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className='flex'>
              <Link to='/#hero'>
                <img
                  className='logo h-20'
                  id='logo'
                  src='https://res.cloudinary.com/thydreams/image/upload/v1678532137/tantrotsav/obhoz1az1rmffy7bqq3y.png'
                  alt='logo'
                />
              </Link>
            </div>
          </motion.div>
        )}
        <div className='md:hidden hum'>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={30}
            color='#03C988'
            label='Show menu'
            onToggle={toggled => {
              if (toggled) {
                // open a menu
              } else {
                // close a menu
              }
            }}
          />
        </div>

        {isOpen && (
          <div className='mob-nav'>
            <ul className='flex flex-col items-center justify-center space-y-10 text-white text-[18px]'>
              {links.map((link, key) => (
                <li
                  key={key}
                  id='lin'
                  className='font-bold cursor-pointer transition duration-500 '
                >
                  <HLink
                    smooth
                    to={link[1]}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {link[0]}
                  </HLink>
                </li>
              ))}
              {/* <li className="font-bold cursor-pointer transition duration-500 ">
                <HLink smooth to="/">
                  Home
                </HLink>
              </li>
              <li className="font-bold cursor-pointer transition duration-500 ">
                <HLink smooth to="/#about">
                  About
                </HLink>
              </li>
              <li
                onClick={() => setOpenDropDown(!openDropDown)}
                className="font-bold cursor-pointer transition duration-500"
              >
                <Link to="/events">Events</Link>
              </li>
              <li>
                <HLink smooth to="/#faq">
                  FAQ
                </HLink>
              </li>
              <li>
                <HLink smooth to="/#contact">
                  Contact
                </HLink>
              </li>
              {!user ? (
                <button
                  id="btn1"
                  onClick={() => {
                    handleLogin();
                  }}
                  className=" border-2 border-[#0dff00] transition duration-500 hover:bg-[#0dff00] hover:font-bold text-[16px] hover:text-black p-2 rounded-[5px] w-[130px]"
                >
                  Login
                </button>
              ) : (
                <Link to="/profile">
                  <Avatar
                    alt="dp"
                    referrerpolicy="no-referrer"
                    src={user.photoURL}
                  />
                </Link>
              )}
            </ul> */}
              {/* 
            {openDropDown && (
              <div class="dropdown">
                <ul>
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                  <li>Option 4</li>
                </ul>
              </div>
            )} */}
            </ul>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -400 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className='hidden  md:block'
        >
          <ul className='flex items-center justify-between space-x-10 text-white text-[18px]'>
            {links.map((link, key) => (
              <li
                key={key}
                id='lin'
                className='font-bold cursor-pointer transition duration-500 hover:font-bold'
              >
                <HLink className='hlink' smooth to={link[1]}>
                  {link[0]}
                </HLink>
              </li>
            ))}
            {!user ? (
              <button
                id='btn1'
                onClick={() => {
                  handleLogin();
                }}
                className=' border-2 border-[#0dff00] transition duration-500 hover:bg-[#0dff00] hover:font-bold text-[16px] hover:text-black p-2 rounded-[5px] w-[130px]'
              >
                Login
              </button>
            ) : (
              <Link to='/profile'>
                <Avatar alt='dp' src={user.photoURL} />
              </Link>
            )}
          </ul>
        </motion.div>
      </div>
    </>
  );
}

export default Navbar;
