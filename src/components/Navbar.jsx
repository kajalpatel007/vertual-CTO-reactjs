import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div class="flex px-10 py-4 justify-between items-center  border-b border-gray-300 flex-wrap">
        <div class="flex items-center">
          <h2 class="font-bold text-2xl text-blue-300">GenNext</h2>
        </div>

        <div class="flex items-center gap-2">
          <button class=" px-2 py-1 rounded-md text-gray-500">
            Production
          </button>
          <button class=" px-2 py-1 rounded-md text-gray-500">
            Virtual CTO
          </button>
          <button class=" px-2 py-1 rounded-md text-gray-500">About</button>
          <button class=" px-2 py-1 rounded-md text-gray-500">Contact</button>
          <button class="border px-2 py-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6  hover:text-gray-500 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <Link to="/register">
            <a class="rounded-md bg-gradient-to-br from-blue-300 to-blue-200 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-blue-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
              Regestration
            </a>
          </Link>{" "}
          <Link to="/admindashboard">
            <a class="rounded-md bg-gradient-to-br from-blue-300 to-blue-200 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-blue-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
              AdminPanel
            </a>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
