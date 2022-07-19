import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import React from "react";

import Root from "../graphs/components/Root"

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />

      <Root />

      <Footer />

    </div>
  );
}

export default Home
