import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Contact() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
      <Carousel
            className=" my-4 w-full"
              swipeable={true}
              draggable={true}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1500}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
            >
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/1.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/17.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/3.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/4.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/5.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/6.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/7.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/8.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/9.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/10.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/11.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/12.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/13.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/14.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/15.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/16.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/17.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/18.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/19.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/20.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/21.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/22.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/23.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/24.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/25.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/26.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/27.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/28.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/29.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/30.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/31.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/32.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/33.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/34.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              <div className="w-full px-1 flex items-center h-full">
                <img src="./public/images/35.jpg" className="h-full object-cover w-full" alt="" />
              </div>
              
              
            </Carousel>
      
  );
}

export default Contact;
