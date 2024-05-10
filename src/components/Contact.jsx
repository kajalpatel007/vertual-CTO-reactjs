import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateMobileNumber = (number) => {
    const regex = /^[0-9]{10}$/; // Assuming a 10-digit number
    return regex.test(number);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);
    if (!validateMobileNumber(value)) {
      setMobileError("Invalid mobile number");
    } else {
      setMobileError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateMobileNumber(mobileNumber) && validateEmail(email)) {
  //     // Do something with valid data
  //     console.log("Mobile number:", mobileNumber);
  //     console.log("Email:", email);
  //   } else {
  //     alert("Please enter valid mobile number and email address");
  //   }
  // };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "633a9e89-2123-4d39-994f-5e43a1d14918");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <section class="contact bg-blue-50 dark:bg-white" id="contact">
        <div class="mx-auto max-w-6xl px-2 py-16 sm:px-6 lg:px-16 lg:py-16">
          <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              {/* <p class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-gray-600">
                    Contact
                </p> */}
              <h2 class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text- text-3xl sm:text-4xl">
                Life is too short for bad software
              </h2>
              <p class="mt-3 text-md text-center text-neutral-500 md:text-xl">
              Hope we can help. Lets talk.
                </p>
             
            </div>
          </div>
          <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
              <div class="h-full pr-6">
              <p class="mt-3 mb-12 text-sm text-gray-600 dark:text-gray-700">
                  Feel free to reach out through contact form or find our
                  contact information below. Your feedback, questions , and
                  suggestions are import to us as we strive to exceptional
                  service to our customers.
                </p>

                
                <ul class="mb-6 md:mb-0">
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-gray-800">
                        Our address
                      </h3>
                      <p class="text-gray-600 dark:text-gray-700 text-sm">
                        India Office: F-02, C-23, sector 63,  <br></br>
                        Noida (UP)-201305
                      </p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-gray-800">
                        Contact
                      </h3>
                      <p class="text-gray-600 dark:text-gray-700 text-sm">
                        Mobile: + 91-78400 79095
                      </p>
                      <p class="text-gray-600 dark:text-gray-700 text-sm">
                        Mail: info@gennextit.com
                      </p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-gray-800">
                        Dubai Office :
                       
                      </h3>
                      <p class="text-gray-600 dark:text-gray-700 text-sm">
                        Trois Con International FZC
                      </p>
                      <p class="text-gray-600 dark:text-gray-700 text-sm">
                        SAIF Office, R3-07/A , PO Box 8692 Sharjah UAE <br></br>
                        Mobile:91 000000000
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 class="mb-4 text-2xl font-bold ">
                  Ready to Get Started?
                </h2>
                <form id="contactForm" onSubmit={onSubmit}>
                  <div class="mb-6">
                    <div class="mx-0 mb-1 sm:mb-4">
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          required
                          class="mb-2 w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          value={email}
                          onChange={handleEmailChange}
                          required
                          class="mb-2 w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                          name="email"
                        />
                                {emailError && <span style={{ color: 'red' }}>{emailError}</span>}

                      </div>
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="number"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="tel"
                          id="mobile"
                          value={mobileNumber}
                          onChange={handleMobileChange}
                          autocomplete="number"
                          placeholder="Your mobile number"
                          required
                          class="mb-2 w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                          name="number"
                        />
                        {mobileError && <span style={{ color: 'red' }}>{mobileError}</span>}

                      </div>
                    </div>
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        required
                        class="mb-2 w-full resize-none rounded-md border border-gray-300 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="w-full bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <span>{result}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
