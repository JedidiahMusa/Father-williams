import React, { useEffect } from "react";
import bgImage from "../assets/bg-image.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowTurnDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

function HeroSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Element name="home">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative w-full lg:h-screen pt-[4.5rem] lg:pt-[5rem] bg-cover bg-center bg-no-repeat text-white"
      >
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <div className="relative z-20 w-full h-full flex flex-col justify-between pb-4">
          <div className="w-full flex min-h-[65%] flex-col items-center justify-center px-4 py-8">
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              className="flex text-center py-2 font-[Anton] w-full justify-center text-4xl md:text-6xl lg:text-7xl"
            >
              PEACE AND EDUCATION
            </p>
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              className="flex text-center py-2 font-[Anton] w-full justify-center text-4xl md:text-6xl lg:text-7xl"
            >
              ARE THE GREATEST
            </p>
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              className="flex text-center py-2 font-[Anton] w-full justify-center text-4xl md:text-6xl lg:text-7xl"
            >
              EQUALIZERS.
            </p>
            <p className="flex text-center mt-4 w-full font-bold justify-center text-2xl md:text-3xl">
              IMPACTING LIVES FOR FUTURE GENERATIONS
            </p>
          </div>

          {/*buttons*/}
          <div className="w-full flex justify-center ">
            <div className="w-full flex flex-col py-4 md:flex-row items-center justify-center px-4 md:px-16 mt-2 gap-6 lg:w-[70%]">
              <button className="bg-[#2563EB] shadow-white duration-300 hover:bg-transparent hover:border-2 h-[3rem] font-bold py-3 hover:shadow-none flex items-center justify-center w-[60%] rounded-full">
              APPLY FOR A SCHOLARSHIP
            </button>
            <button className="bg-transparent shadow-white duration-300 hover:bg-[#2563EB] hover:border-none border-2 h-[3rem] font-bold py-3 hover:shadow-none flex items-center justify-center w-[60%] rounded-full">
              REQUEST A BOREHOLE
            </button>
            </div>
            
          </div>

          <div className="bottom-0 flex items-end justify-center w-full z-10">
            <motion.div
              animate={{
                y: [10, -5, 10],
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
                <FaArrowTurnDown size={25} className="ml-4 text-blue-400 " />
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default HeroSection;
