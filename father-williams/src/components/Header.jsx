import React, { useEffect } from "react";
import bgImage from "../assets/bg-image.jpeg";
import logo from "../assets/logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";
import { FaArrowTurnDown } from "react-icons/fa6";
import { motion } from "framer-motion";

function Header() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xs z-10"></div>

      <div className="relative z-20 w-full h-full flex flex-col justify-between pb-4">
        <div className="w-full p-4">
          <div className="w-full p-2 border-b-1 border-[#ffffff67] flex h-[4.5rem] md:h-[5.5rem]">
            <div className="h-full p-2 mx-2 flex items-center">
              <img src={logo} alt="Logo" className="h-full object-contain" />
            </div>
            <div className="text-center h-full flex flex-col justify-center items-center w-full md:text-2xl lg:text-3xl font-bold">
              <p>FATHER WILLIAMS ABBA CHARITABLE TRUST</p>{" "}
              <ReactTyped
                strings={["(EST.2024)"]}
                typeSpeed={100}
                backSpeed={50}
                backDelay={1000}
                loop
                className="md:text-2xl lg:text-4xl"
              />
            </div>
          </div>
        </div>

        <div className="w-full px-4">
          <p
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1500"
            className="flex text-center font-[Oswald] py-8 w-full justify-center text-3xl md:text-5xl lg:text-6xl"
          >
            PEACE AND EDUCATION ARE THE GREATEST EQUALIZERS.
          </p>
          <p
            data-aos="flip-up"
            data-aos-once="true"
            data-aos-duration="1500"
            className="flex text-center w-full font-[Oswald] justify-center text-3xl md:text-5xl lg:text-6xl"
          >
            IMPACTING LIVES FOR FUTURE GENERATIONS
          </p>
        </div>

        {/* Updated Button Container */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-16 mt-4 gap-6">
          <button className="bg-[#2f5ec4] h-[3.3rem] md:h-[4rem] hover:scale-104 shadow-sm shadow-[#6b69da] font-bold px-7 rounded-full w-full md:w-auto lg:text-[1.2rem] mb-4 md:mb-0">
            APPLY FOR A SCHOLARSHIP
          </button>
          <button className="bg-[#2f5ec4] h-[3.3rem] md:h-[4rem] hover:scale-104 px-7 shadow-sm shadow-[#6b69da] font-bold w-full md:w-auto lg:text-[1.2rem] rounded-full">
            REQUEST A BOREHOLE
          </button>
        </div>

        <div className="bottom-0 flex items-end justify-center w-full z-10">
          <motion.div
            animate={{
              y: [5, -15, 5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <p className="flex text-[1.2rem] font-light font-[Anton]">
              scroll
              <FaArrowTurnDown size={25} className="ml-4 text-[#2f5ec4]" />
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Header;