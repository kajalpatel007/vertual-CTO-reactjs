import React from "react";
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div>
      <div class="relative flex flex-col items-center justify-center max-w-screen-xl px-10 mx-auto md:flex-row mt-5 md:mt-0 sm:px-6">
        <div class="flex items-center md:pl-24 md:w-1/2 md:pb-20 md:pt-5 md:pr-5">
          <div class="text-left">
            <h2 class="text-4xl font-bold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-4xl">
            The Power of a Virtual CTO<br></br> 
              <span class="font-bold text-blue-400">A Game-Changer</span>
              {/* <span class="text-xl font-semibold rounded-full text-blueGray-500">2.0</span> */}
            </h2>
            <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-sm md:max-w-3xl">
            Technology is an integral part of business success in today's world. 
In the era of Gen AI, AI, machine learning, and the Data Science are becoming increasingly crucial for modernization and transformation strategy for businesses, and hence the role of a Chief Technology Officer (CTO) has never been more critical. 
            </p>
           <div class="mt-5 sm:flex md:mt-8">
               <div class="rounded-md shadow">
                <a
                  href=""
                  class="hidden md:flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-400 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue md:py-2 md:text-md md:px-4"
                >
                 Mail us
                </a>
              </div>
             
              {/* <li className='rounded-md bg-gradient-to-br list-none from-blue-300 to-blue-200 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-blue-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03] cursor-pointer'><Link to='contact' smooth={true} offset={-10} duration={500}>Contact us</Link></li> */}

              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href=""
                  class="hidden md:flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-400 transition duration-150 ease-in-out bg-white border border-blue-400 rounded-md hover:text-blue-400 focus:outline-none shadow-lg md:py-2 md:text-md md:px-4"
                ><Link to='contact' smooth={true} offset={-10} duration={500}>Contact us</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex items-center md:w-1/2 md:pb-20 md:pt-5 md:pl-5 hidden">
          <div class="relative w-full p-3 rounded md:pl-10">
            <div class="rounded-lg bg-white text-black w-[400px] ">
              <img src="https://tailwindcomponents.com/svg/website-designer-bro.svg" />
            </div>
          </div>
        </div>
      </div>
      <a href="https://wa.me/919584477828">
      <img
          src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG17.png"
          className="w-[45px] z-50 md:w-[55px] animate-bounce focus:animate-none hover:animate-none shadow-xl rounded-full fixed bottom-7 right-7 "
        ></img></a>
    </div>
  );
};

export default Hero;
