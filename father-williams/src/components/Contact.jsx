import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Contact() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 570 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 570, min: 0 },
      items: 1,
    },
  };

  const CustomDot = ({ onClick, active }) => (
    <li>
      <button
        onClick={onClick}
        className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
          active ? "bg-blue-500" : "bg-gray-300"
        }`}
      />
    </li>
  );
  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 z-10 bg-white p-4 rounded-full shadow-md hover:bg-blue-700"
      style={{ top: "45%", left:"5%" }}
    >
      <IoIosArrowBack color="blue" cursor={"pointer"} size={18} />
    </button>
  );
  
  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 bg-white p-4 rounded-full shadow-md hover:bg-blue-700"
      style={{ top: "45%", right: "5%" }}
    >
      <IoIosArrowForward color="blue" size={18} />
    </button>
  );
  return (
    <Carousel
      className=" my-8 gap-[1rem] py-8 mx-4 md:mx-8 lg:mx-14 flex "
      swipeable={true}
      draggable={true}
      removeArrowOnDeviceType={"mobile"}
      responsive={responsive}
      infinite={true}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      autoPlay={true}
      showDots={true}
      customDot={<CustomDot />}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={600}
      itemClass="px-3 h-[23rem] ease-in-out duration-500 hover:scale-105 "
    >
      <div className=" rounded-3xl flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/1.jpg"
          className="h-full w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl flex items-center w-full h-full">
        <img
          src="./public/images/3.jpg"
          className="h-full w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl flex items-center w-full h-full">
        <img
          src="./public/images/4.jpg"
          className="h-full w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl flex items-center w-full h-full">
        <img
          src="./public/images/5.jpg"
          className="h-full w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
    </Carousel>
  );
}

export default Contact;
