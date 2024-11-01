import React from "react";
import { useState } from "react";
import Canvax from "./assets/canvax.png";
import { Link, useLocation } from "react-router-dom";

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="">
      <div className="bg-black flex  justify-between items-center   ">
        <div className="">
          <Link to="/">
            <img className="w-32 rounded-xl" src={Canvax} alt="logo" />
          </Link>
        </div>
        <div className="flex justify-center items-center w-36">
          <i
            className="bx bx-menu sm:hidden text-2xl mt-4 text-white"
            onClick={toggleMenu}
          ></i>
        </div>
        <div className="hidden sm:flex text-white text-xl mr-4 ">
          <div className="">
            <Link
              className={`p-2 ${
                currentPath === "/"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-green-600 m-2"
              }`}
              to="/"
            >
              Home
            </Link>

            <Link
              className={`p-2  ${
                currentPath === "/about"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-green-600 m-2"
              }`}
              to="/about"
            >
              About
            </Link>

            <Link
              className={`p-2 ${
                currentPath === "/contact"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-green-600  m-2"
              }`}
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className={`p-2 ${
                currentPath === "/infrastructure"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-green-600 m-2 "
              }`}
              to="/infrastructure"
            >
              Special
            </Link>
          </div>
        </div>
      </div>
      <div
        id="smile"
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } transition-height duration-300 overflow-hidden sm:hidden text-white flex flex-col text-center gap-4`}
      >
        <Link onClick={closeMenu} className="font-bold text-xl" to="/">
          Home
        </Link>

        <Link onClick={closeMenu} className="font-bold text-xl" to="/about">
          About
        </Link>

        <Link onClick={closeMenu} to="/contact" className="font-bold text-xl">
          Contact
        </Link>
        <Link
          onClick={closeMenu}
          to="/infrastructure"
          className="font-bold text-xl"
        >
          Special
        </Link>
      </div>

      <body />
    </div>
  );
};

export default Head;
