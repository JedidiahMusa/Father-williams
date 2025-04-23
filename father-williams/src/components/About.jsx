import React from "react";

function About() {
  return (
    <div className="w-full px-4 text-center bg-gray-200 pb-4 ">
      <p className="w-full flex font-[Anton] items-center text-4xl md:text-5xl justify-center h-[3.5rem] md:h-[4rem] ">
        WHO ARE WE?
      </p>
      <p className="text-2xl mt-4 ">
        The Father Williams Abba Charitable Trust is a FIRS approved 501.c3
        non-profit organization.
      </p>
      <div className="my-6">
        <p className="text-3xl font-bold ">
          The Father Williams Abba Charitable Trust has a tri-fold objective.
        </p>
        <ol className="font-semibold text-[1.2rem]">
          <li className="my-2">1. Peace building initiatives.</li>
          <li className="my-2">
            2. Providing tuition aid in the form of scholarships to the younger
            generation from disadvantaged families with focus on families from
            Southern Kaduna.
          </li>
          <li className="my-2">
            3. Provision of safe, clean water to rural communities with
            solar-powered boreholes.
          </li>
        </ol>
      </div>
      <div className="w-full flex items-center justify-center">
    
          <button className="bg-[#2f5ec4] md:w-[50%] hover:scale-102 h-[4rem] font-bold py-3 flex items-center justify-center w-full rounded-full mt-4 mb-4">
            MEET OUR TEAM
          </button>
        
      </div>
    </div>
  );
}

export default About;
