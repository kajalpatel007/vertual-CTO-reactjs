import React from "react";
import { footerData } from "../data/Collaboration";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
    
      <footer>
     
        <div className="bg-white py-4 px-3 text-gray-400 ">
          <div className="container px-4 mx-auto">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 my-4 w-full xl:w-1/5">
                <div class="flex flex-col text-sm text-gray-500  ">
                  <img
                    src="https://gennextit.com/assets/Frontend/logo/Gennextlogoxdarkblue.png"
                    className="w-[120px] md:w-[160px] mb-3"
                  ></img>
                  <h1 className="text-gray-800 font-medium">India Office:</h1>
                  <p className="text-gray-500 pb-2">
                    F-02, C-23, sector 63, Noida (UP)-201305
                  </p>
                  <h1 className="text-gray-800 font-medium">Dubai Office :</h1>
                  <p className="text-gray-800 font-medium">
                    Trois Con International FZC
                  </p>
                  <p className="text-gray-500"> SAIF Office, R3-07/A ,</p>
                  <p className="text-gray-500">PO Box 8692 Sharjah UAE</p>
                </div>
              </div>

              {footerData.map((data) => (
                <div className="px-4 my-4 w-full sm:w-auto">
                  <div
                    className="mb-3 pb-2"
                    style={{ borderBottom: "1px solid gray" }}
                  >
                    <h2 className="inline-block text-md font-semibold  text-gray-700 ">
                      {data.section}
                    </h2>
                  </div>

                  <ul className="leading-8">
                    {data.contents.map((content) => (
                      <li>
                        <Link
                          to={content.link}
                          className="hover:text-blue-400 text-sm text-gray-500"
                          style={{ fontFamily: "sans-serif" }}
                        >
                          {content.name}
                        </Link>
                        
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {/* Socials icons */}
              <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                <div
                  className="mb-3 pb-2"
                  style={{ borderBottom: "1px solid gray" }}
                >
                  <h2 className="inline-block text-md font-semibold  text-gray-700 ">
                    Contact
                  </h2>
                </div>
                <div className=" text-sm text-gray-500">
                  <a href="tel:+91-78400-79095" className="hover:text-blue-700">&#9990; +91-78400-79095 </a><br></br>
                  <a href="tel:+91-98999-69498" className="hover:text-blue-700">&#9990;  +91-120-4994499</a><br></br>
                  <a href="mailto: info@gennextit.com" className="pb-2 hover:text-blue-700">&#9993; info@gennextit.com</a>
                  <p className="text-gray-800 font-medium">Dubai contact</p>

                  <a href="tel:+91-120-4994499" className="hover:text-blue-700">&#9990; +91-120-4994499</a><br></br>
                  <a href="tel:+91-120-4994499" className="hover:text-blue-700">&#9990; +91-120-4994499</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-blue-500 py-2 text-gray-100">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 w-full text-center sm:w-auto text-sm sm:text-left">
                Copyright © 2022 - 2024
                VirtualCTO. All Rights Reserved.
              </div>
            
             
            </div>
          </div>
        </div> */}
      </footer>
    </div>
  );
}

export default Footer;
