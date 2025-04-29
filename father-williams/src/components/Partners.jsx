import React from "react";
import Marquee from "react-fast-marquee";

function Partners() {
  return (
    <div className="w-full flex justify-center">
       <div className="w-[94%] lg:w-[97%]">
      <p className="w-full h-[4rem] font-[Anton] font-light flex bg-gray-200 items-center justify-center md:text-5xl text-4xl ">ACADEMIC PARTNERS</p>
      <div className=" flex items-center rounded-b-4xl bg-gray-200 justify-center">
        <Marquee pauseOnHover={true} speed={100} className="overflow-y-hidden py-8 rounded-b-4xl bg-gray-200">
          <p className="text-4xl mx-8 font-[Anton]">
            Federal University of Applied Sciences, Kachia
          </p>
          <p className="text-4xl mx-8 font-[Anton]">University of Jos</p>
          <p className="text-4xl mx-8 font-[Anton]"> Kaduna State University</p>
          <p className="text-4xl mx-8 font-[Anton]">
            Federal University, Lafia
          </p>
          <p className="text-4xl mx-8 font-[Anton]">
            Ahmadu Bello University, Zaria
          </p>
          <p className="text-4xl mx-8 font-[Anton]">
            Veritas University, Bwari
          </p>
        </Marquee>
      </div>
    </div>
    </div>
   
  );
}

export default Partners;
