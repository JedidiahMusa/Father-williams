import React from "react";
import Mission from "./components/Mission";
import Impact from "./components/Impact";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Objective from "./components/Objective";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Objective />
      <Mission />
      <Impact />
      <Partners />
      <Contact  />
      <OurTeam  />
      <Footer />
    </>
  );
}

export default App;
