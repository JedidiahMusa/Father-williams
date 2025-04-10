import React from "react";
import bgImage from "../assets/bg-image.jpg";
import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="w-full pb-4 text-white bg-cover bg-center bg-no-repeat "
      >
        <div className="w-full p-4">
          <div className="w-full p-2 rounded-full bg-[#ffffff54] flex h-[6.5rem] md:h-[7.5rem] ">
            <div className="h-full p-2 mx-2 flex items-center">
              <img
              src={logo}
              alt="Logo"
              className="h-[90%]  md:h-full object-contain "
            />
            </div>
            
            <div className="text-center text-[.9rem] h-full flex flex-col justify-center items-center w-full md:text-2xl lg:text-3xl font-bold ">
              <p> FATHER WILLIAMS ABBA CHARITABLE TRUST (EST. 2024)</p>
              <p> IMPACTING LIVES FOR FUTURE GENERATIONS</p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 ">
          <p className="flex text-center w-full justify-center font-[Anton] font-light mt-10 text-5xl md:text-6xl lg:text-7xl">
            PEACE AND EDUCATION ARE THE GREATEST EQUALIZERS
          </p>
        </div>
        <div>
          
          <div className="px-4 md:my-8 md:flex gap-6">
            <button className="bg-[#ffb300]  hover:scale-102 text-black font-bold py-5 px-7 rounded-full w-full mt-4 mb-4">
              APPLY FOR SCHOLARSHIP
            </button>
            <button className="bg-[#ffb300]  hover:scale-102 text-black h-[4rem] font-bold py-3 flex items-center justify-center w-full text-[1rem] rounded-full mt-4">
              REQUEST A BOREHOLE FOR YOUR COMMUNITY
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
