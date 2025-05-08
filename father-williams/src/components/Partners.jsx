import React from "react";
import Marquee from "react-fast-marquee";
import a from "../assets/1.png";
import b from "../assets/2.png";
import c from "../assets/3.png";
import d from "../assets/4.png";
import e from "../assets/5.png";
import f from "../assets/6.png";


function Partners() {

  const marqueeData = [
    {img:a, id:1},
    {img:b, id:2},
    {img:c, id:3},
    {img:d, id:4},
    {img:e, id:5},
    {img:f, id:6},
  ]
  return (
    <div className="w-full flex justify-center">
      <div className="w-[94%] lg:w-[97%]">
        <p className="w-full h-[4rem] font-[Anton] font-light flex items-center justify-center md:text-5xl text-4xl ">
          ACADEMIC PARTNERS
        </p>
        
          <Marquee
            pauseOnHover={true}
            speed={30}
            
            className="overflow-hidden py-2 mt-6 w-full"
          >
            {marqueeData.map((div)=>(
              <div key={div.id} className="mx-4 md:mx-8 h-[7rem] lg:mx-13 "> 
              <img src={div.img} alt="" className="w-full h-full object-cover" />
            </div>
            ))}
          </Marquee>
          <Marquee
            pauseOnHover={true}
            speed={30}
            direction="right"
            className="overflow-hidden py-2 mt-6 w-full"
          >
            {marqueeData.map((div)=>(
              <div key={div.id} className="mx-4 md:mx-8 h-[7rem] lg:mx-13 "> 
              <img src={div.img} alt="" className="w-full h-full object-cover" />
            </div>
            ))}
          </Marquee>
      
      </div>
    </div>
  );
}

export default Partners;
