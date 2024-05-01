import React from "react";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <div class="flex md:px-20 px-5 py-4 justify-between items-center bg-gray-600 md:bg-white border-b border-gray-300 flex-wrap">
        <div class="flex items-center">
        <img src="https://gennextit.com/assets/Frontend/logo/Gennextlogoxdarkblue.png" className="w-[120px] md:w-[160px]"></img>
      
        </div>

        <div class="flex items-center gap-2">
          <button class="hidden md:inline-block px-2 py-1 rounded-md text-gray-500">
            Production
          </button>
          <button class="hidden md:inline-block px-2 py-1 rounded-md text-gray-500">
            Virtual CTO
          </button>
          <button class="hidden md:inline-block px-2 py-1 rounded-md text-gray-500">About</button>
          <button class="sm:border px-2 py-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white md:hover:text-gray-500 md:text-gray-700"
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
          <li className='rounded-md bg-gradient-to-br list-none from-blue-300 to-blue-200 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-blue-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03] cursor-pointer'><Link to='contact' smooth={true} offset={-10} duration={500}>Contact us</Link></li>

          {/* <Link to="/contactus"><a
            class="rounded-md bg-gradient-to-br from-blue-300 to-blue-200 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-blue-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >
           Contact us
          </a></Link>{" "} */}
        
          
          
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
