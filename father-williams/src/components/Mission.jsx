import React from "react";
import scholarship from "../assets/scholarship.jpeg";
import internship from "../assets/internship.jpeg";
import allowance from "../assets/allowance.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 200,
  duration: 600,
  delay: 300,
  easing: "ease-in-out",
});

function Mission() {
  const cards = [
    {
      image: scholarship,
      title: "SCHOLARSHIPS",
      description: "We provide scholarships opportunities for students.",
      aos: "zoom-out-left",
    },
    {
      image: allowance,
      title: "MONTHLY STIPEND",
      description:
        "Scholars receive a monthly allowance to cover school and living expenses.",
      aos: "zoom-out-down",
    },
    {
      image: internship,
      title: "INTERNSHIP ",
      description:
        "Scholars are paired with corporate and industry partners to apply their learning in a practical setting.",
      aos: "zoom-out-right",
    },
  ];

  return (
    <div className="w-full px-4 bg-white">
      <p className="w-full h-[4rem] md:text-5xl font-[Anton] flex items-center justify-center text-4xl">
        HOW WE HELP
      </p>

      <div className="mx-auto relative md:grid overflow-hidden min-h-[20rem] grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            data-aos={card.aos}
            data-aos-once="true"
            className="w-full border border-gray-300 h-full border-t-0 flex my-8 shadow-xl flex-col items-center rounded-lg duration-300"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-10"></div>
            <div className=" h-full w-full">
              <img
                className=" h-full w-full object-cover"
                src={card.image}
                alt={card.title}
              />
            </div>

            <div className=" px-8 py-8 z-30 absolute text-white ">
              <p className="py-4 text-3xl font-bold">{card.title}</p>
              <p className="text-[1.2rem]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mission;
