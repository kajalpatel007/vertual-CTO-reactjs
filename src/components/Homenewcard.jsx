import React from "react";
// import Collaboration from './Collaboration'

const Homenewcard = () => {
  return (
    <div>
      <section class=" bg-blue-200 lg:bg-gradient-to-r  from-blue-500 to-blue-800 ">
        <div class="mx-auto max-w-6xl px-2 py-16 sm:px-6 lg:py-9 ">
        {/* <Collaboration /> */}
        
          <div class="h-full flex justify-center min-h-[400px] w-full  pt-12 p-4 ">
            <div class=" grid gap-14 md:grid-cols-3 md:gap-5">
              <div class="rounded-lg border-t-2 border-blue-600 bg-white p-6 text-center shadow-xl">
              <div class="mx-auto flex h-16 w-16 -translate-y-12  transform  items-center justify-center rounded-full shadow-lg bg-white p-3 shadow-gray-500/40">
                <img src="/public/technologr_strategy.jpeg" className=" rounded-full"></img>


                </div>
                <h1 class="text-darken mb-3  text-xl font-medium lg:px-14">
                  Technology Strategy
                </h1>
                <p class="px-4 text-gray-500">
                  Looking to create technology strategy and bring new technology
                  initiatives? <br></br>Virtual CTOs helps organizations to
                  organization level tech strategy and align the vision and
                  strategy with modernized and transformative roadmap.
                </p>
              </div>
              <div
                data-aos-delay="150"
                class="rounded-lg bg-white border-t-2 border-blue-600 p-6 text-center shadow-xl"
              >
                <div class="mx-auto flex h-16 w-16  -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-white p-3 shadow-gray-500/40">
                <img src="/public/technology.jpeg" className=" rounded-full"></img>

                </div>
                <h1 class="text-darken mb-3 text-xl font-medium lg:px-14 ">
                  Technology Leadership
                </h1>
                <p class="px-4 text-gray-500">
                  Are you looking the leader who can provide the required
                  leadership to teams and empower them to deliver unparalleled
                  results? <br></br> Virtual CTOs provide seasoned leadership
                  and expertise to enhance delivery outcomes and at same time
                  increase productivity:
                </p>
              </div>
              <div
                data-aos-delay="300"
                class="rounded-lg bg-white border-t-2 border-blue-600 p-6 text-center shadow-xl"
              >
              <div class="mx-auto flex h-16 w-16 -translate-y-12 transform  items-center justify-center rounded-full shadow-lg bg-white p-3 shadow-gray-500/40">
                <img src="/public/technologr_strategy.jpeg" className=" rounded-full"></img>

                </div>
                <h1 class="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
                  {" "}
                  Technology Delivery
                </h1>
                <p class="px-4 text-gray-500">
                  Are you looking to enhance your delivery capabilities and
                  improve the delivery cadence with high quality project/
                  product deliveries. They excel in improving the following
                  essential areas:{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homenewcard;
