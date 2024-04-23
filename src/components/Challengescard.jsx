import React from "react";

const Challengescard = () => {
  return (
    <div className="pb-16">
      <div class="pb-8">
        {/* <div class="flex felx-col items-center justify-center">
    <span
      class="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm"
    >
      Insight
    </span>
  </div> */}
        <h1 class="text-4xl font-medium text-gray-700 text-center mt-6">
          Are you facing these challenges?
        </h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 md:px-20">
        <div class="p-8">
          <div class="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 class="uppercase mt-6 text-gray-700 font-medium mb-3">
            Non-Tech Founder
          </h2>
          <p class="font-normal text-sm leading-5 text-gray-600 mb-6 dark:text-gray-400">
            We get insulted by others, lose trust for those others. We get back
            stabbed by friends. It becomes harder for us to give others a hand.
          </p>
          <a
            class="text-blue-300 flex items-center hover:text-blue-400"
            href="/"
          >
            More about us icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div class="p-8">
          <div class="bg-blue-100 rounded-full w-16 h-16 flex justify-center items-center text-blue-500 shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 class="uppercase mt-6 text-gray-700 font-medium mb-3">
            Tech is hard
          </h2>
          <p class="font-normal text-sm leading-5 text-gray-600 mb-6 dark:text-gray-400">
            We get insulted by others, lose trust for those others. We get back
            stabbed by friends. It becomes harder for us to give others a hand.
          </p>
          <a
            class="text-blue-300 flex items-center hover:text-blue-400"
            href="/"
          >
            More about us icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div class="p-8">
          <div class="bg-blue-100 rounded-full w-16 h-16 flex justify-center items-center text-blue-500 shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 class="uppercase mt-6 text-gray-700 font-medium mb-3">
            Inexperienced Team
          </h2>
          <p class="font-normal text-sm leading-5 text-gray-600 mb-6 dark:text-gray-400">
            We get insulted by others, lose trust for those others. We get back
            stabbed by friends. It becomes harder for us to give others a hand.
          </p>
          <a
            class="text-blue-300 flex items-center hover:text-blue-400"
            href="/"
          >
            More about us icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Challengescard;
