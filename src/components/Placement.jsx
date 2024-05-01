import React from "react";
import { card4, placementaccordian, proffessionalaccordian, projectaccordian } from "../data/data";
// import { placementaccordian, proffessionalaccordian } from "../../data/data";

const Placement = () => {
  return (
    <div className="md:px-20">
     <div class="flex flex-col items-center  ">
            <h2 class="mt-5 text-center text-3xl font-bold md:font-medium tracking-tight md:text-4xl">Our services</h2>
           
        </div>
      <div className="relative overflow-hidden container m-auto pt-10 pb-32 space-y-24 mt-2">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-7 lg:px-0 ">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      ></path>
                    </svg>
                  </span>
                </div>

                <div className="mt-2">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                    Technology Strategy
                  </h2>
                  <p className="mt-4 text-md text-gray-500 mb-2">
                  Looking to create technology strategy and bring new technology initiatives? Virtual CTOs helps organizations to organization level tech strategy and align the vision and strategy with modernized and transformative roadmap. They align the following elements to propel your technological endeavors forward
                  </p>
                  {proffessionalaccordian.map((item) => {
                    return (
                      <li className="leading-7 md:pl-5 pl-0 text-gray-800 pt-">{item.question}</li>
                    );
                  })}
                  <div className="mt-6 hidden">
                    <a
                      className="inline-flex rounded-lg bg-blue-400 px-4 py-1.5 text-base font-semibold leading-7 text-gray-100 shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                      href="/login"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 sm:mt-16 lg:mt-0 hidden md:flex">
              <div className="-mr-48 pl-6 md:-mr-16 flex justify-center items-center lg:relative lg:m-0 lg:h-full lg:px-0">
                {/* <img
                  loading="lazy"
                  width="647"
                  height="486"
                  className=" rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0  lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
                /> */}
                <img
              src="https://th.bing.com/th/id/OIP.ld6U9CtzoGILV37xngPqkgHaF7?w=1280&h=1024&rs=1&pid=ImgDetMain"
              alt="Product screenshot"
              class="w-[48rem] h-[400px]  rounded-xl shadow-lg ring-1 ring-gray-400/10 sm-h[48rem] sm:w-[52rem] md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
            />
              </div>
            </div>
          </div>
        </div>

        <div className="relative container m-auto">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-4 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="mt-2">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                   Technology Leadership
                  </h2>
                  <p className="mt-4 text-md text-gray-500 mb-2">
                  Are you looking the leader who can provide the required leadership to teams and empower them to deliver unparalleled results? Virtual CTOs provide seasoned leadership and expertise to enhance delivery outcomes and at same time increase productivity:
                    
                  </p>
               
                  {placementaccordian.map((item) => {
                    return (
                      <li className="leading-7 md:pl-5 pl-0 text-gray-800">{item.question}</li>
                      
                    );
                  })}
                  <div className="mt-6 hidden">
                    <a
                      className="inline-flex rounded-lg bg-blue-400 px-4 py-1.5 text-base font-semibold leading-7 text-gray-100 shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                      href="/login"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-16 lg:mt-0 hidden md:flex">
              <div className="-ml-48 pr-6 md:-ml-16 flex justify-center items-center lg:relative lg:m-0 lg:h-full lg:px-0">
                {/* <img
                  alt="Inbox user interface"
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
                /> */}
                <img
              src="https://www.cbmcint.com/wp-content/uploads/2022/07/Sept-19-MM-2.jpeg"
              alt="Product screenshot"
              class="w-[48rem] h-[400px] rounded-xl shadow-lg ring-1 ring-gray-400/10 sm-h[48rem] sm:w-[52rem] md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
            />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-7 lg:px-0 ">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      ></path>
                    </svg>
                  </span>
                </div>

                <div className="mt-2">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                    Technology Delivery
                  </h2>
                  <p className="mt-4 text-md text-gray-500 mb-2">
                  Are you looking to enhance your delivery capabilities and improve the delivery cadence with high quality project/ product deliveries. They excel in improving the following essential areas:                  </p>
                  {projectaccordian.map((item) => {
                    
                    return (
                      <li className="leading-7 md:pl-5 pl-0 text-gray-800">{item.question}</li>
                    );
                  })}
                  <div className="mt-6 hidden">
                    <a
                      className="inline-flex rounded-lg bg-blue-400 px-4 py-1.5 text-base font-semibold leading-7 text-gray-100 shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                      href="/login"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-16 lg:mt-0 hidden md:flex">
              <div className="-mr-48 pl-6 md:-mr-16 flex justify-center items-center lg:relative lg:m-0 lg:h-full lg:px-0">
                {/* <img
                  loading="lazy"
                  width="647"
                  height="486"
                  className=" rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0  lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
                /> */}
                <img
              src="https://static.vecteezy.com/system/resources/previews/002/058/617/non_2x/untact-technology-delivery-package-concept-free-vector.jpg"
              alt="Product screenshot"
              class="w-[48rem] h-[400px]  rounded-xl shadow-lg ring-1 ring-gray-400/10 sm-h[48rem] sm:w-[52rem] md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
            />
              </div>
            </div>
          </div>
        </div>

        <div className="relative container m-auto">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-4 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="mt-2">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                  AI-ML Strategy for Startups
                  </h2>
                  <p className="mt-4 text-md text-gray-500 mb-2">
                  Our expert Virtual CTO’s well-crafted strategy compiles your tech project's specific needs to make sure that AI and ML initiatives match your product development. Our leading virtual CTO services enable the best-suited AI/ML development strategy depending on your requirements.                    
                  </p>
              
                  {card4.map((item) => {
                    return (
                      <li className="leading-7 md:pl-5 pl-0 text-gray-800">{item.question}</li>
                      
                    );
                  })}
                  <div className="mt-6 hidden">
                    <a
                      className="inline-flex rounded-lg bg-blue-400 px-4 py-1.5 text-base font-semibold leading-7 text-gray-100 shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                      href="/login"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-16 lg:mt-0 hidden md:flex">
              <div className="-ml-48 pr-6 md:-ml-16 flex justify-center items-center lg:relative lg:m-0 lg:h-full lg:px-0">
                {/* <img
                  alt="Inbox user interface"
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
                /> */}
                <img
              src="https://th.bing.com/th/id/OIP.0s0bHXOuhfmFgOC9vAAoFwHaGW?rs=1&pid=ImgDetMain"
              alt="Product screenshot"
              class="w-[48rem] h-[400px] rounded-xl shadow-lg ring-1 ring-gray-400/10 sm-h[48rem] sm:w-[52rem] md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
            />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;
