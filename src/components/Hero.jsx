import React from "react";
import { Link } from 'react-scroll';
import './Icon.css'

const Hero = () => {
  return (
    <div>
      <div class="relative flex flex-col  max-w-screen-xl px-10 mx-auto md:flex-row mt-20 lg:mt-20 sm:px-6">
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
                  class="hidden md:flex  items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-400 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue md:py-2 md:text-md md:px-4"
                >
                 Mail us
                </a>
              </div>
              
             
              {/* <li className='rounded-md bg-gradient-to-br list-none from-blue-300 to-blue-200 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-blue-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03] cursor-pointer'><Link to='contact' smooth={true} offset={-10} duration={500}>Contact us</Link></li> */}

              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href=""
                  class="hidden md:flex  animate-pulse focus:animate-none hover:animate-none items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-400 transition duration-150 ease-in-out bg-white border border-blue-400 rounded-md hover:text-blue-400 focus:outline-none shadow-lg md:py-2 md:text-md md:px-4"
                ><Link to='contact'  smooth={true} offset={-10} duration={500}>Contact us</Link>
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div class="md:flex items-center md:w-1/2 md:pb-20 md:pt-5 md:pl-5 hidden">
          <div class="relative w-full p-3 rounded md:pl-10">
            <div class="rounded-lg bg-white  text-black  ">
              <img src='/public/heroimg.jpeg' className="h-[500px] w-[450px] rounded-lg " />
              {/* <img src='/public/heroimg.jpeg' className="h-[300px] relative flex w-[300px] bottom-64 right-52 rounded-lg" /> */}
            </div>
          </div>
        </div>
      </div>
      <a href="https://wa.me/919584477828">
      <img
          src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG17.png"
          className="w-[45px] z-50 md:w-[55px] animate-bounce focus:animate-none hover:animate-none shadow-xl rounded-full fixed bottom-7 right-7 "
        ></img></a>

<div class="icon-bar z-50">
 
  <a href="#" class="twitter p-2 pb-2 md:p-3 bg-black"><svg className="w-7 h-7 fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" fill='rgb(255 255 255)'></path>
                  </svg></a> 

  <a href="https://www.facebook.com/gennextconsulting" class="facebook p-2 md:p-3 bg-blue-700"><svg className="w-7 h-7 fill-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" fill='rgb(255 255 255)'></path>
                  </svg></a> 
 
  <a href="https://www.instagram.com/gennext_it/?hl=en" class="instagram  p-2 md:p-3 bg-gradient-to-r from-orange-300 to-pink-600"><svg className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill='rgb(200 50 100)'></path>
                  </svg></a> 
</div>
       
        
    </div>
  );
};

export default Hero;
