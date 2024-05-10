import React from "react";

const Homenewcard = () => {
  return (
    <div>
      <section class=" bg-blue-200 ">
        <div class="mx-auto max-w-6xl px-2 py-16 sm:px-6 lg:py-16 ">
          <div class="h-full flex justify-center min-h-[400px] w-full  pt-12 p-4 ">
            <div class=" grid gap-14 md:grid-cols-3 md:gap-5">
              <div class="rounded-xl bg-white p-6 text-center shadow-xl">
              <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-white p-3 shadow-gray-500/40">
                <img src="/public/technologr_strategy.jpeg" className=" rounded-full"></img>


                </div>
                <h1 class="text-darken mb-3 text-xl font-medium lg:px-14">
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
                class="rounded-xl bg-white p-6 text-center shadow-xl"
              >
                <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-white p-3 shadow-gray-500/40">
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
                class="rounded-xl bg-white p-6 text-center shadow-xl"
              >
                <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
                  <svg
                    viewBox="0 0 55 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white "
                  >
                    <path
                      d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
                      fill="lightblue"
                    ></path>
                  </svg>
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
