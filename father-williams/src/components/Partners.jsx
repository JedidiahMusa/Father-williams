import React from "react";
import Marquee from "react-fast-marquee";

function Partners() {
  return (
    <>
    <p className="w-full h-[4rem] flex bg-gray-200 items-center justify-center font-bold md:text-3xl text-2xl ">OUR ACADEMIC PARTNERS</p>
      <div className="h-[4rem] flex items-center bg-gray-200 justify-center">
        <Marquee pauseOnHover={true} speed={100} className="overflow-y-hidden bg-gray-200">
          <p className="text-3xl mx-8 font-[Anton]">
            Federal University of Applied Sciences, Kachia
          </p>
          <p className="text-3xl mx-8 font-[Anton]">University of Jos</p>
          <p className="text-3xl mx-8 font-[Anton]"> Kaduna State University</p>
          <p className="text-3xl mx-8 font-[Anton]">
            Federal University, Lafia
          </p>
          <p className="text-3xl mx-8 font-[Anton]">
            Ahmadu Bello University, Zaria
          </p>
          <p className="text-3xl mx-8 font-[Anton]">
            Veritas University, Bwari
          </p>
        </Marquee>
      </div>
    </>
  );
}

export default Partners;
