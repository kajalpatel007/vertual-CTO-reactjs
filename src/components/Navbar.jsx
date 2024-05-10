
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    });
  }, []);
  return (
    <>
      <nav
        className={`bg-blue-300 sm:bg-white px-4 md:px-14 font-serif w-[100%] py-2 text-[#fff] fixed top-0 left-0  flex items-center justify-between z-10 ${
          sticky
            ? " bg-blue-300 sm:bg-white z-10 text-white md:pt-2 shadow-xl"
            : ""
        }`}
      >
        <a href="https://www.gennextit.com/">
          <img
            src= "https://gennextit.com/assets/Frontend/logo/Gennextlogoxdarkblue.png" 
            alt="image"
            className="w-[100px] md:w-[150px] "
          />
        </a>
        <div
          className=" hidden lg:flex gap-6 font-sans text-blue-700"
          style={{ fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <p>&#9990; +91-78400 79095 </p>
          <p>&#9990; +91-120-4994499</p>
          {/* &#128222; */}
        </div>
        <ul className="text-sm md:bg-gradient-to-r from-blue-500 to-blue-700 py-1.5 rounded-full">
          <li
            className="inline-block sm:hidden bg-white text-blue-700 mr-[5px] py-1 px-4 rounded-full cursor-pointer"
            style={{ fontFamily: "sans-serif" }}
          >
            Contact us
          </li>
        </ul>
        <ul className="text-sm md:bg-gradient-to-r from-blue-500 to-blue-700 py-1.5 rounded-full">
          <Link
            to="https://www.gennextit.com/about"
            className="hidden md:inline-block hover:bg-blue-500 mx-[5px] py-1 px-4 rounded-full cursor-pointer "
            style={{ fontFamily: "sans-serif" }}
          >
            About us
          </Link>
          <Link
            to="https://www.gennextit.com/career"
            className="hidden md:inline-block hover:bg-blue-500 mx-[5px] py-1 px-4 rounded-full cursor-pointer "
            style={{ fontFamily: "sans-serif" }}
          >
            Career
          </Link>
          <Link
            to="https://www.gennextit.com/training"
            className="hidden md:inline-block hover:bg-blue-500 mx-[5px] py-1 px-4 rounded-full cursor-pointer "
            style={{ fontFamily: "sans-serif" }}
          >
            Training
          </Link>
          <li
            className="hidden md:inline-block hover:bg-blue-500 mx-[5px] py-1 px-4 rounded-full cursor-pointe"
            style={{ transition: "all 0.3s ease 0s", fontFamily: "sans-serif" }}
          >
            <li onClick={toggleMenu}>
              Services{" "}
              <span className="ml-1" style={{ fontSize: "9px" }}>
                &#9660;
              </span>
            </li>
            {isOpen && (
              <div className="absolute mt-6 bg-white shadow-lg grid grid-cols-4 rounded-md md:right-60 h-[200px] w-[800px]">
                <div
                  className="grid-cols-3 px-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  <p
                    className=" font-semibold text-gray-700  pb-2"
                    style={{ fontSize: "15px", fontFamily: "sans-serif" }}
                  >
                    IT Consultancy
                  </p>
                  <Link
                    to="https://www.gennextit.com/services/it-advisory"
                    className="block text-gray-800 pb-2 hover:text-blue-500"
                  >
                    IT Advisory and Consulting
                  </Link>
                  <Link
                    to="https://www.gennextit.com/services/it-audits"
                    className="block text-gray-800 pb-2 hover:text-blue-500"
                  >
                    IT Audits
                  </Link>
                </div>
                <div
                  className="grid-cols-3 px-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  <p
                    className=" font-semibold text-gray-700  pb-2"
                    style={{ fontSize: "15px", fontFamily: "sans-serif" }}
                  >
                    Application Development
                  </p>
                  <Link
                    to="https://www.gennextit.com/services/web-application-development-and-maintenance"
                    className="block text-gray-800 pb-2 hover:text-blue-500"
                  >
                    Web Application Development And Maintenance
                  </Link>
                  <Link
                    to="https://www.gennextit.com/services/mobile-applications"
                    className="block text-gray-800 pb-2 hover:text-blue-500"
                  >
                    Mobile Applications
                  </Link>
                  <Link
                    to="#"
                    className="block text-gray-800 pb-2 hover:text-blue-500"
                  >
                    Others
                  </Link>
                </div>
                <div
                  className="grid-cols-3 px-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  <p
                    className=" font-semibold text-gray-700  pb-2"
                    style={{ fontSize: "15px" }}
                  >
                    IT & Telecom Training
                  </p>
                </div>
                <div
                  className="grid-cols-3 px-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  <p
                    className=" font-semibold text-gray-700  pb-2"
                    style={{ fontSize: "15px" }}
                  >
                    Corporate Training
                  </p>
                  <Link
                    to="https://www.gennextit.com/services/web-development"
                    className="block text-gray-800 pb-2 hover:text-blue-500"
                  >
                    Web Development
                  </Link>
                </div>
              </div>
            )}
          </li>

          <Link
            to="https://www.gennextit.com/contact"
            className="hidden md:inline-block bg-white text-blue-700 mr-[5px] py-1 px-4 rounded-full cursor-pointer"
            style={{ fontFamily: "sans-serif" }}
          >
            Contact us
          </Link>
        </ul>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                class="w-6 h-6 inline-block md:hidden text-white sm:text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden ">
            <div className="fixed inset-0 flex z-100">
              <div className="flex-shrink-0 w-full bg-white shadow-md transform transition-transform ease-in-out duration-300">
                <nav className="bg-blue-300 py-2">
                  <div className="flex justify-between items-center">
                    <Link
                      to="https://www.gennextit.com/"
                      className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      <span>&#127968;</span> Home
                    </Link>
                    <Link to="https://www.gennextit.com/">
                      <img
                        src="https://gennextit.com/assets/Frontend/logo/Gennextlogoxdarkblue.png"
                        alt="image"
                        className="w-[100px] md:w-[150px] "
                      />
                    </Link>
                    {isOpen && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="block h-6 w-6 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </div>
                </nav>
                <div className="py-6">
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    About us
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Training
                  </Link>
                  <Link
                    to="https://www.gennextit.com/contact"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Career
                  </Link>
                  <Link
                    to=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    <span className="text-black pr-3">&#9743;</span>Contact us
                  </Link>
                </div>
              </div>
              <div
                className="fixed inset-0 bg-black opacity-0"
                onClick={toggleMenu}
              ></div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
