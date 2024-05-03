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
    paragraph: 'Senior Technology Leader and Enterprise Architect with around 24 years of experience in transforming, building and modernizing the complex IT organizations and its functions by implementing required level of innovation, cutting-edge technology and building long term sustainable solutions. ',
  },
  
];


  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  // };
  
  return (
    <>
      <div class=" max-w-3xl text-center mt-5 sm:text-center md:mx-auto ">
        <h2 class="font-heading mb-3 font-medium tracking-tight text-gray-900 dark:text- text-3xl sm:text-4xl">
          People
        </h2>
        <p class="mx-auto max-w-3xl text-md text-gray-600 dark:text-slate-400">
          We just know tech and we know that very well!
        </p>
      </div>
      





    <div className='md:flex justify-between items-center md:px-20 gap-20 md:pt-20 pt-20 pb-5  ' >
    {carouselData.map((index) => {
      return (
        <>
        <div className="relative mb-20 md:mb-0" style={{boxShadow: "1px 1px 9px -2.5px"}} >
      
      <div className="mx-auto max-w-lg flex flex-col ">
        <img src={index.image} alt="carousel" className="flex-shrink-0 -mt-10 w-24 h-24 rounded-full self-center" />
        <div className="text-center p-4">
          <h2 className="text-xl font-bold mb-2 text-blue-500">{index.heading}</h2>
          <p className="text-gray-700 px-5">{index.paragraph}</p>
        </div>
      </div>
    </div>
        </>
      )
    })}
    
    </div>
  
     
    </>
  );
}
export default Testimonial