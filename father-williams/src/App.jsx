import React from "react";
import Header from "./components/Header";
import Mission from "./components/Mission";
import About from "./components/About";
import Impact from "./components/Impact";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header id="header" />
      <About id="about" />
      <Mission id="mission" />
      <Impact id="impact" />
      <Partners id="partners" />
      <Contact id="contact" />
      <OurTeam id="team" />
      <Footer />
    </>
  );
}

export default App;
