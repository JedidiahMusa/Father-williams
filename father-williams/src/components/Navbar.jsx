import React from "react";
import logo from "../assets/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
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

  const [isScrolled, setIsScrolled] = useState(false);
    function handleScroll (){
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
    }
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (

    <div className="w-full ">
      <nav className={`fixed w-full h-[4.5rem] lg:h-[5rem] z-50 ${isScrolled ? "bg-[#000000f1] shadow-md" : "bg-transparent"}`} >
        <div className=" h-full w-full mx-auto px-4  flex items-center justify-between">
          {/* Logo */}
          <div className=" flex items-center py-1 justify-center h-full ">
            <img src={logo} className="object-contain rounded-4xl w-full h-full " alt="" />
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
                className="cursor-pointer font-semibold text-[1.1rem] group relative text-gray-100"
              >
                {link.name}
                <span class="absolute left-0 -bottom-0.5 h-[3px] w-0 bg-blue-400 transition-all duration-400 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <IoMdClose size={25} className="text-white" />
              ) : (
                <GiHamburgerMenu size={25} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t-0 border-1 rounded-2xl border-gray-500 bg-[#000000f1] pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-60}
                onClick={() => setIsOpen(false)}
                className="block py-5 text-gray-100 px-4 rounded-2xl hover:bg-gray-300 hover:text-blue-600 duration-500 ease-in-out transition"
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
