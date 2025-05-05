import React from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Objective", to: "objective" },
    { name: "Help", to: "howWeHelp" },
    { name: "Impact", to: "impact" },
    { name: "Team", to: "ourteam" },
  ];

  return (

    <div className="w-full ">
      <nav className="fixed w-full bg-gray-200 h-[4.5rem] lg:h-[5rem] shadow-md z-50">
        <div className=" h-full w-full mx-auto px-4  flex items-center justify-between">
          {/* Logo */}
          <div className="w-[25%] lg:w-[15%] flex items-center justify-center h-full ">
            <img src={logo} className="object-contain w-full h-full " alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-60}
                className="cursor-pointer  text-black duration-300 hover:scale-107 hover:text-blue-400 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <IoMdClose size={24} className="text-blue-400" />
              ) : (
                <GiHamburgerMenu className="text-blue-400" size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-gray-200 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-60}
                onClick={() => setIsOpen(false)}
                className="block py-5 text-gray-700 px-4 hover:bg-gray-300 hover:text-blue-600 duration-500 ease-in-out transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
