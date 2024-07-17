import React from "react";
import "./Navbar.css";
import "../App.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <div className="tagline">
        <marquee>
          <h2>
            GO FIGHT FOR IT TEAM ! ------------------- GO FIGHT FOR IT TEAM !
            ------------------- GO FIGHT FOR IT TEAM ! ------------------- GO
            FIGHT FOR IT TEAM ! ------------------- GO FIGHT FOR IT TEAM !
            ------------------- GO FIGHT FOR IT TEAM ! ------------------- GO
            FIGHT FOR IT TEAM !
          </h2>
        </marquee>
      </div>
      <div className="relative">
        <nav className="text-gray-600 body-font bg-slate-300 w-full navbar">
          <div className="container mx-auto flex flex-wrap p-0.5 px-4 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img
                src="../../public/sports-logo-transparent.png"
                alt=""
                style={{ width: "60px" }}
              />
              <span className="ml-3 text-xl">LCO Basket League</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-8 cursor-pointer">
              <a className="mr-5 nav-link">Home</a>
              <Link
                to={"about-us"}
                smooth={true}
                duration={500}
                className="mr-5 nav-link"
              >
                About Us
              </Link>
              <Link
                to={"tournament"}
                smooth={true}
                duration={500}
                className="mr-5 nav-link"
              >
                Tournament
              </Link>
              <Link
                to={"team"}
                smooth={true}
                duration={500}
                className="mr-5 nav-link"
              >
                Team
              </Link>
              <Link
                to={"contact-us"}
                smooth={true}
                duration={500}
                className="mr-5 nav-link"
              >
                Contact Us
              </Link>
            </nav>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mr-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Login
            </button>
            <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base text-white mt-4 md:mt-0">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
