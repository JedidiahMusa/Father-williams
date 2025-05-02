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
      title: "INTERNSHIP",
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
            data-aos-duration="800"
            className="relative ease-in-out hover:scale-105 duration-500 group w-full h-[20rem] my-8 overflow-hidden rounded-lg shadow-xl"
          >
            <img
              className="w-full group-hover:scale-110 duration-500 h-full object-cover"
              src={card.image}
              alt={card.title}
            />

            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 z-10" />

            <div className="absolute z-20 text-white opacity-0 group-hover:opacity-100 transition duration-300 px-6 py-6 top-0 left-0 right-0 bottom-0 flex flex-col justify-center">
              <p className="text-2xl font-bold mb-2">{card.title}</p>
              <p className="text-base">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mission;
