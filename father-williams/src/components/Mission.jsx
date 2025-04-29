import React from "react";
import scholarship from "../assets/scholarship.jpeg";
import internship from "../assets/intenship.png";
import allowance from "../assets/allowance.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 200,
      duration: 600,
      delay: 100,
      easing: 'ease-in-out',
});

function Mission() {
  return (
    <div className="w-full px-4 bg-white">
      <p className="w-full h-[4rem] md:text-5xl font-[Anton] flex items-center justify-center text-4xl ">
        HOW WE HELP
      </p>
      <div className=" mx-auto md:grid overflow-hidden md:grid-cols-3 gap-4">
        <div data-aos="zoom-out-left" data-aos-once="true"  className="w-full border border-gray-300 border-t-0 flex my-8 shadow-xl flex-col items-center p-2 rounded-lg duration-300 ">
          
          <div className="h-[20rem] bg-yellow-200 flex">
            <img
              className=" mx-auto w-full object-contain bg-white"
              src={scholarship}
              alt=""
            />
          </div>

          <p className="text-2xl font-bold text-center py-8">SCHOLARSHIPS</p>
          <p>We provide scholarships opportunities for students.</p>
        </div>
        <div data-aos="zoom-out-down" data-aos-once="true" className="w-full border border-gray-300 border-t-0 flex my-8 flex-col items-center p-2 rounded-lg shadow-xl duration-300 ">
          <div className="h-[20rem] bg-yellow-200 flex">
            <img
              className=" mx-auto w-full object-contain bg-white"
              src={allowance}
              alt=""
            />
          </div>

          <p className="text-2xl font-bold text-center py-8">
            MONTHLY STIPEND
          </p>
          <p>
            Scholars receive a monthly allowance to cover school and living
            expenses.
          </p>
        </div>
        <div data-aos="zoom-out-right" data-aos-once="true" className="w-full border border-gray-300 border-t-0 flex my-8 flex-col shadow-xl items-center p-2 rounded-lg duration-300 ">
          <div className="h-[20rem] bg-yellow-200 flex">
            <img
              className=" mx-auto w-full object-contain bg-white"
              src={internship}
              alt=""
            />
          </div>

          <p className="text-2xl font-bold text-center py-8">
            {" "}
            INTERNSHIP OPPORTUNITIES
          </p>
          <p>
            {" "}
            Scholars are paired with corporate and industry partners to apply
            their learning in a practical setting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
