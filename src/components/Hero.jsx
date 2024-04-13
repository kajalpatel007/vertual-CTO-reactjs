import React from "react";

const Hero = () => {
  return (
    <div>
      <div class="relative flex flex-col items-center justify-center max-w-screen-xl px-10 mx-auto md:flex-row sm:px-6">
        <div class="flex items-center md:pl-24 md:w-1/2 md:pb-20 md:pt-5 md:pr-5">
          <div class="text-left">
            <h2 class="text-4xl font-bold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-4xl">
              Virtual CTO & Software Consulting
              <span class="font-bold text-blue-300"> Section</span>
              {/* <span class="text-xl font-semibold rounded-full text-blueGray-500">2.0</span> */}
            </h2>
            <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-sm md:max-w-3xl">
              We provide consulting around Idea-to-Market and Technical
              Architecture. Talk to us for Virtual CTO services for startups and
              enterprises{" "}
            </p>
            <div class="mt-5 sm:flex md:mt-8">
              <div class="rounded-md shadow">
                <a
                  href=""
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-300 border border-transparent rounded-md hover:bg-blue-400 focus:outline-none focus:shadow-outline-blue md:py-2 md:text-md md:px-4"
                >
                  Getting started
                </a>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href=""
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-300 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-400 focus:outline-none shadow-lg md:py-2 md:text-md md:px-4"
                >
                  Contribute
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex items-center md:w-1/2 md:pb-20 md:pt-5 md:pl-5 hidden">
          <div class="relative w-full p-3 rounded md:pl-10">
            <div class="rounded-lg bg-white text-black w-[400px]">
              <img src="https://tailwindcomponents.com/svg/website-designer-bro.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
