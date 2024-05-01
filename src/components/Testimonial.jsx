import React, { useState } from "react";

const Testimonial = () => {

const carouselData = [
  {
    image: 'https://gennextit.com/assets/Frontend/images/amitgupta.png',
    heading: 'Amit Gupta (CEO & CTO)',
    paragraph: 'Amit has more than 20 years of professional experience in handling Information security and governance assignments with expertise in ISMS, IT General Controls (ITGC’s) audit, IT risk and governance audits, BCP and DR planning and reviews across a range of industries.',
  },
  {
    image: '/Amit_gupta2.jpeg',
    heading: 'Amit Gupta (CEO)',
    paragraph: 'Senior Technology Leader and Enterprise Architect with around 24 years of experience in transforming, building and modernizing the complex IT organizations and its functions by implementing required level of innovation, cutting-edge technology and building long term sustainable solutions. Strong Enterprise Architect acumen in leading various Enterprise Solutions, Solution Design and achieving delivery excellence for various global organization functions in domain like Banking and Financial Services, Healthcare, Manufacturing and IT Services.',
  },
  
];


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  };
  
  return (
    <>
      <div class=" max-w-3xl text-center sm:text-center md:mx-auto ">
        <h2 class="font-heading mb-3 font-medium tracking-tight text-gray-900 dark:text- text-3xl sm:text-4xl">
          People
        </h2>
        <p class="mx-auto max-w-3xl text-md text-gray-600 dark:text-slate-400">
          We just know tech and we know that very well!
        </p>
      </div>
      





    <div className='md:px-48 md:py-20 pt-20 pb-5 ' >
    
    <div className="relative " style={{boxShadow: "1px 1px 9px -2.5px"}} >
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-0 md:p-1 rounded-full" onClick={prevSlide}>
        {/* SVG for previous icon */}
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-0 md:p-1 rounded-full" onClick={nextSlide}>
        {/* SVG for next icon */}
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="mx-auto max-w-lg flex flex-col ">
        <img src={carouselData[currentIndex].image} alt="carousel" className="flex-shrink-0 -mt-10 w-24 h-24 rounded-full self-center" />
        <div className="text-center p-4">
          <h2 className="text-xl font-bold mb-2 text-blue-500">{carouselData[currentIndex].heading}</h2>
          <p className="text-gray-700 px-5">{carouselData[currentIndex].paragraph}</p>
        </div>
      </div>
    </div>
    </div>
  
     
    </>
  );
}
export default Testimonial