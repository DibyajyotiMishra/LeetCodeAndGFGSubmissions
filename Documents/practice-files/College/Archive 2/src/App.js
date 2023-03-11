import React, { useState } from "react";
import NavBar from "./components/Navbar";
import RouteLinks from "./components/routes/RouteLinks";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";
import { auth } from "./firebase";
// import Home from "./components/Home";
function App() {
  const [isOpen, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="App  scrollbar" id="scrollbar5">
      {/* <ParticleBackground /> */}
      <Router>
        <NavBar
          isOpen={isOpen}
          user={user}
          setUser={setUser}
          setOpen={setOpen}
        />
        {!isOpen && (
          <RouteLinks isOpen={isOpen} user={user} setUser={setUser} />
        )}
      </Router>
    </div>
  );
}

export default App;
