import React from "react";

const Infographics = () => {
  return (
    <>
      <section>
        <div class="mx-auto max-w-6xl px-2  sm:px-6 lg:pt-5 lg:pb-5">
          <div class="relative w-full bg-white px-6  py-10 pb-8 md:mt-8  ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-full sm:rounded-lg sm:px-10">
            <div class="">
              <div class="flex flex-col items-center">
                <h2 class="md:mt-5 text-center text-3xl font-medium tracking-tight md:text-4xl">
                  Hire CTO Consulting Services Tailored for Startups and
                  Enterprises
                </h2>
                <p class="mt-3 text-xl font-sans text-center text-gray-700 lg:text-neutral-600 md:text-xl">
                  A CTO on Demand is a game-changer approach to onboarding
                  dynamic technology leaders who can develop strategy, execute a
                  technology roadmap, manage entire technology innovation, and
                  deliver remarkable technical solutions to meet business
                  objectives.
                </p>
                <div className=" flex justify-center">
                  <img src="/infographics3.png" className="w-[100%] md:w-[80%]"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Infographics;
