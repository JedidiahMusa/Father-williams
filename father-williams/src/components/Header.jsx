import React, { useEffect } from "react";
import bgImage from "../assets/bg-image.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowTurnUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Element } from "react-scroll";


function Header() {
  useEffect(() => {
    AOS.init();
  }, []);



  return (
     <Element name="home">
       <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative w-full lg:h-screen  pt-[4.5rem] lg:pt-[5rem] bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xs z-10"></div>

      <div className="relative z-20 w-full h-full flex flex-col justify-between pb-4">

        <div className="w-full px-4 py-8">
          <p
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1500"
            className="flex text-center font-[Anton] py-8 w-full justify-center text-3xl md:text-5xl lg:text-6xl"
          >
            PEACE AND EDUCATION ARE THE GREATEST EQUALIZERS.
          </p>
          <p
            data-aos="flip-up"
            data-aos-once="true"
            data-aos-duration="1500"
            className="flex text-center mt-4 w-full font-[Anton] justify-center text-3xl md:text-5xl lg:text-6xl"
          >
            IMPACTING LIVES FOR FUTURE GENERATIONS
          </p>
        </div>

        {/* Updated Button Container */}
        <div className="w-full flex flex-col py-8 md:flex-row items-center justify-center px-4 md:px-16 mt-4 gap-6">
          <button className="bg-blue-400 shadow-black shadow-md h-[3.3rem] md:h-[3.7rem] hover:scale-104  font-bold px-7 rounded-full w-full md:w-auto lg:text-[1.2rem]">
            APPLY FOR A SCHOLARSHIP
          </button>
          <button className="bg-blue-400 shadow-black shadow-md h-[3.3rem] md:h-[3.7rem] hover:scale-104 px-7  font-bold w-full md:w-auto lg:text-[1.2rem] rounded-full">
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
              <FaArrowTurnUp size={25} className="ml-4 text-blue-400 " />
            </p>
          </motion.div>
        </div>
      </div>
    </div>
     </Element>
   
  );
}

export default Header;
