import React, { useEffect } from "react";
import bgImage from "../assets/bg-image.jpeg";
import logo from "../assets/logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";

function Header() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative w-full lg:h-screen bg-cover bg-center bg-no-repeat text-white"
    >

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>

  
      <div className="relative z-20 w-full h-full flex flex-col justify-between pb-4">
      
        <div className="w-full p-4">
          <div className="w-full p-2 border-b-1 border-[#ffffff67] flex h-[6.5rem] md:h-[7.5rem]">
            <div className="h-full p-2 mx-2 flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-full object-contain"
              />
            </div>
            <div className="text-center text-[1.2rem] h-full flex flex-col justify-center items-center w-full md:text-2xl lg:text-3xl font-bold">
              <p>FATHER WILLIAMS ABBA CHARITABLE TRUST</p> <ReactTyped
                strings={["(EST.2024)"]}
                typeSpeed={100}
                backSpeed={50}
               backDelay={1000}
                loop
                className=" text-2xl md:text-3xl lg:text-4xl" />
            </div>
          </div>
        </div>

     
        <div className="w-full px-4">
          <p
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1500"
            className="flex text-center font-[Oswald] py-8 w-full justify-center text-4xl md:text-6xl lg:text-7xl"
          >
            PEACE AND EDUCATION ARE THE GREATEST EQUALIZERS.
          </p>
          <p  data-aos="flip-up"
            data-aos-once="true"
            data-aos-duration="1500"
            className="flex text-center w-full font-[Oswald] justify-center text-4xl md:text-6xl lg:text-7xl">IMPACTING LIVES FOR FUTURE GENERATIONS</p>
        </div>

        <div className="w-full items-center justify-center lg:flex-1 px-16 mt-4 md:flex gap-6">
          <button className="bg-[#2f5ec4] hover:bg-[#2f75c4] lg:h-[4rem] hover:scale-102 shadow-sm shadow-[#6b69da] h-[3.3rem] font-bold px-7 rounded-full w-full lg:text-[1.2rem] md:mb-0 mb-4">
            APPLY FOR A SCHOLARSHIP
          </button>
          <button className="bg-[#2f5ec4] lg:h-[4rem] hover:bg-[#2f75c4] hover:scale-102 px-7 shadow-sm shadow-[#6b69da] h-[3.3rem] font-bold w-full lg:text-[1.2rem] rounded-full">
            REQUEST A BOREHOLE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
