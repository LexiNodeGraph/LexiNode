import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import React from "react";

import Root from "../graphs/components/Root"

const Home = () => {
  return (
    <div>
      <NavBar />

      <div className="fixed h-screen w-full inset-x-0 top-20 z-0">
      <Root />

      </div>

      <Footer />

    </div>
  );
}

export default Home;
