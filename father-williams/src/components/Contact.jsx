import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

function Contact() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 570 },
      items: 2,
      slidesToSlide: 2,
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
          active ? "bg-blue-600" : "bg-gray-300"
        }`}
      />
    </li>
  );
  const CustomLeftArrow = ({ onClick }) => (
    <div className="absolute z-10" style={{ top: "45%", left: "5%" }}>
      <button
        onClick={onClick}
        className="group p-3 rounded-full hidden shadow-md duration-500 bg-white group-hover:block hover:bg-blue-600 ease-in-out transition-all"
      >
        <BiSolidLeftArrow
          className="text-blue-600 group-hover:text-blue-600 duration-500 ease-in-out hover:text-white transition-all"
          size={25}
        />
      </button>
    </div>
  );
  
  
  
  const CustomRightArrow = ({ onClick }) => (
    <div className="absolute right-0 z-10" style={{ top: "45%", right: "5%" }}>
      <button
        onClick={onClick}
        className="group p-3 rounded-full shadow-md ease-in-out duration-500 bg-white group-hover:block hidden hover:bg-blue-600 transition-all"
      >
        <BiSolidRightArrow className="transition-all duration-500 ease-in-out text-blue-600 group-hover:text-blue-600 hover:text-white" size={25} />
      </button>
    </div>
  );
  
  return (
    <div className="relative group">
      <Carousel
      className=" my-8 gap-[1rem] py-8 mx-4 md:mx-8 lg:mx-14 flex"
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
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/1.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/3.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/5.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/6.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/7.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/8.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/9.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/10.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/11.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/12.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/13.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/14.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/15.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/16.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/17.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/19.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/20.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/21.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/23.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/24.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/25.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/26.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/27.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/28.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/29.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/30.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/32.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
      <div className=" rounded-3xl overflow-hidden flex ease-in-out items-center w-full h-full">
        <img
          src="./public/images/33.jpg"
          className="h-full transform hover:scale-110 transition-transform duration-500 w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
    </Carousel>
    </div>
    
  );
}

export default Contact;
