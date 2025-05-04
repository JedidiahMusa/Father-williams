import React from "react";
import Marquee from "react-fast-marquee";
import a from "../assets/1.png";
import b from "../assets/2.png";
import c from "../assets/3.png";
import d from "../assets/4.png";
import e from "../assets/5.png";
import f from "../assets/6.png";


function Partners() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[94%] lg:w-[97%]">
        <p className="w-full h-[4rem] font-[Anton] font-light flex items-center justify-center md:text-5xl text-4xl ">
          ACADEMIC PARTNERS
        </p>
        
          <Marquee
            pauseOnHover={true}
            speed={30}
            gradient
            className="overflow-hidden py-2 mt-6 w-full"
          >
            <div className="mx-4 md:mx-8 h-[7rem] lg:mx-13 "> 
              <img src={a} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mx-4 md:mx-8 h-[7rem] lg:mx-13 ">
              <img src={b} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mx-4 md:mx-8 h-[7rem] lg:mx-13 ">
              <img src={c} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mx-4 md:mx-8 h-[7rem] lg:mx-13 ">
              <img src={d} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mx-4 md:mx-8 h-[7rem] lg:mx-13 ">
              <img src={e} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mx-4 md:mx-8 h-[7rem] lg:mx-13 ">
              <img src={f} alt="" className="w-full h-full object-cover" />
            </div>
              
           
          </Marquee>
          <Marquee
            pauseOnHover={true}
            speed={30}
            gradient
            direction="right"
            className="overflow-hidden py-2 mt-6 w-full"
          >
            <div className="mx-8 lg:mx-13 h-[7rem]"> 
              <img src={a} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mx-8 lg:mx-13 h-[7rem]">
              <img src={b} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mx-8 lg:mx-13 h-[7rem]">
              <img src={c} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mx-8 lg:mx-13 h-[7rem]">
              <img src={d} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mx-8 lg:mx-13 h-[7rem]">
              <img src={e} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mx-8 lg:mx-13 h-[7rem]">
              <img src={f} alt="" className="w-full h-full object-cover" />
            </div>
              
           
          </Marquee>
      
      </div>
    </div>
  );
}

export default Partners;
