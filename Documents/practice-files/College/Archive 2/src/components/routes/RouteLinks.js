import { Route, Routes } from "react-router-dom";
import EventsIndex from "../events/index/index.js";
import EceIndex from "../events/index/ece/index.js";
import MechIndex from "../events/index/mech/index.js";

import Home from "../Home";
import Footer from "../Footer";
import Dashboard from "../user/dashboard.js";
import RegistedEvents from "../user/eventcard.js";
import Profile from "../user/profile.js";
// import ParticleBackground from "../ParticleBackground";
import Sponsors from "../sponsors.js";
import RegisterEvent from "../auth/registerEvent.js";
import React from "react";
import EventDetails from "../events/eventDetails/eventDetails.js";
import SignIn from "../auth/signin.js";
import StepGoogle from "../auth/steps/StepGoogle.js";
import { Navigate } from "react-router-dom";

const RouteLinks = ({ isOpen, setUser, user }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<EventsIndex />} />
      <Route path="/ece" element={<EceIndex />} />
      <Route path="/mech" element={<MechIndex />} />

{/* 
      {/* 
      <Route path='/' element={<Home isOpen={isOpen} />} />
      <Route path='/events' element={<EventsIndex isOpen={isOpen} />} /> */}
      {/* <Route path="/register" element={<RegisterEvent />} /> */}
      <Route path="/register/" element={<RegisterEvent />} />
      <Route path="/events/:details" element={<EventDetails />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/registedEvents" element={<RegistedEvents />} />
      <Route
        path="/profile"
        element={
          user ? (
            <Profile setUserL={setUser} />
          ) : (
            <Navigate to="/" replace="true" />
          )
        }
      />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default RouteLinks;
