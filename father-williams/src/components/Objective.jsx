import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import peace from "../assets/peace.jpeg";
import peace2 from "../assets/peace2.jpeg";
import water from "../assets/water.jpeg";
import water2 from "../assets/water2.jpeg";
import scholarships from "../assets/scholarships.jpeg";
import scholarships2 from "../assets/scholarships2.jpeg";
import { motion } from "framer-motion";
import { Element } from 'react-scroll';

function Objective() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Element name="objective">
      <div className="w-full px-4 bg-gray-200 py-4 ">
      <p className="w-full flex font-[Anton] items-center text-4xl md:text-5xl justify-center h-[3.5rem] md:h-[4rem] ">
        OUR OBJECTIVE
      </p>
      <p className="text-2xl mt-4 text-center ">
        The Father Williams Abba Charitable Trust is a FIRS approved 501.c3
        non-profit organization, and it has a tri-fold objective...
      </p>
      <div className="my-6">
 
        <div className="overflow-hidden ">
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-once="true"
            className="flex min-h-[25rem]  gap-4 lg:px-[4rem] flex-col border-1 rounded-3xl border-gray-300 items-center justify-center mt-4 w-full md:flex-row "
          >
            <motion.div
              animate={{
                y: [0, -3, 0],
                rotate: [0, 3, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="relative group md:ml-[2rem] p-4 flex-1 min-w-[20rem] min-h-[20rem] "
            >
              <img
                src={peace}
                alt=""
                className="absolute z-10 group-hover:scale-105 ease-in-out duration-500 top-0 right-0 rounded-2xl group-hover:-rotate-5 rotate-8 object-cover h-[80%] w-[80%] "
              />
              <img
                src={peace2}
                alt=""
                className="absolute bottom-0 ease-in-out duration-500 group-hover:rotate-5 rounded-2xl -rotate-8 left-0 object-cover h-[80%] w-[80%] "
              />
            </motion.div>
            <p className="p-8 md:p-4 text-[1.2rem] ">
              <p className="font-bold ">1. PEACE BUILDING INITIATIVES </p>
              Our peace building initiatives aim to empower local communities
              through dialogue, education, and collaboration, fostering a
              culture of nonviolence and mutual respect to ensure lasting social
              harmony.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-once="true"
            className="flex min-h-[25rem] border-1 rounded-3xl border-gray-300 gap-4 lg:px-[4rem] flex-col-reverse items-center justify-center mt-4 w-full md:flex-row "
          >
            <p className="p-8 md:p-4 text-[1.2rem] ">
              <p className="font-bold ">2. SCHOLARSHIP OPPORTUNITIES </p>
              Providing tuition support through scholarships to empower the younger generation, with a dedicated focus on uplifting families from Southern Kaduna through access to quality education.
            </p>
            <motion.div
              animate={{
                y: [0, -3, 0],
                rotate: [0, 3, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="relative group md:mr-[2rem] p-4  min-w-[20rem] min-h-[20rem] "
            >
              <img
                src={scholarships2}
                alt=""
                className="absolute z-10 group-hover:scale-105 ease-in-out duration-500 top-0 right-0 rounded-2xl group-hover:rotate-5 -rotate-8 object-cover h-[80%] w-[80%] "
              />
              <img
                src={scholarships}
                alt=""
                className="absolute bottom-0 ease-in-out duration-500 group-hover:-rotate-5 rounded-2xl rotate-8 left-0 object-cover h-[80%] w-[80%] "
              />
            </motion.div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-once="true"
            className="flex min-h-[25rem] flex-col border-1 rounded-3xl border-gray-300 gap-4 lg:px-[4rem] items-center justify-center mt-4 w-full md:flex-row "
          >
            
            <motion.div
              animate={{
                y: [0, -3, 0],
                rotate: [0, 3, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="relative group md:ml-[2rem] p-4 flex-1 min-w-[20rem] min-h-[20rem] "
            >
              <img
                src={water}
                alt=""
                className="absolute z-10 group-hover:scale-105 ease-in-out duration-500 top-0 right-0 rounded-2xl group-hover:-rotate-5 rotate-8 object-cover h-[80%] w-[80%] "
              />
              <img
                src={water2}
                alt=""
                className="absolute bottom-0 ease-in-out duration-500 group-hover:rotate-5 rounded-2xl -rotate-8 left-0 object-cover h-[80%] w-[80%] "
              />
            </motion.div>
            <p className="p-8 md:p-4 text-[1.2rem] ">
              <p className="font-bold ">3. PROVISION OF SAFE, CLEAN DRINKING WATER </p>
              We ensure the provision of safe and clean water to rural communities by installing solar-powered boreholes, promoting health, sustainability, and access to a vital resource in areas with limited infrastructure.
            </p>

          </div>

        </div>

     
      </div>
      <div className="w-full flex flex-col py-4 md:flex-row items-center justify-center px-4 md:px-16 mt-2 gap-6">
        <button className="bg-[#2563EB] shadow-sm shadow-black duration-200 md:w-[50%] hover:bg-transparent hover:border-2 h-[3rem] font-bold py-3 hover:shadow-none flex items-center justify-center w-[60%] rounded-full">
          SCHOLARSHIP FORMS
        </button>
        <button className="bg-[#2563EB] shadow-sm shadow-black duration-200 md:w-[50%] hover:bg-transparent hover:border-2 h-[3rem] font-bold py-3 hover:shadow-none flex items-center justify-center w-[60%] rounded-full">
          MEET OUR TEAM
        </button>
      </div>
    </div>
    </Element>
    
  );
}

export default Objective;
