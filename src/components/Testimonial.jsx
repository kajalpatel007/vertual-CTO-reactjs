import { TestimonialData } from "../data/Testimonialdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  };
  return (
    <>
    <div class=" max-w-3xl text-center sm:text-center md:mx-auto ">
    
                <h2
                    class="font-heading mb-3 font-medium tracking-tight text-gray-900 dark:text- text-3xl sm:text-4xl">
                    People
                </h2>
                <p class="mx-auto max-w-3xl text-md text-gray-600 dark:text-slate-400">We just know tech and we know that very well!
                   
                </p>
            </div>
      <div className=" h-[380px]  bg-slate-700 my-11">
      
        <div className="w-3/4 m-auto">
          <Slider {...settings}>
            {TestimonialData.map((pitems) => {
              return (
                <section
                  className="w-3/4 m-auto sm:mt-3 flex-col relative isolate  px-3 py-15 sm:py-10 lg:px-3"
                  style={{ padding: "30px" }}
                >
                  <img className="mx-auto mb-6 h-12" src={pitems.img1} alt="" />

                  <p className="ml-10 mr-10 mb-10 text-center text-gray-300 text-sm md:text-lg font-semibold sm:leading-7">
                    " {pitems.text}. "
                  </p>
                  <div className="flex justify-center items-center">
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src={pitems.img2}
                        alt="image"
                      />
                    </div>
                    <div style={{ padding: "7px" }}>
                      <p className=" font-semibold text-lg text-gray-100">
                        {pitems.name}
                      </p>
                      <p className=" text-gray-400">{pitems.title}</p>
                    </div>
                  </div>
                </section>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
