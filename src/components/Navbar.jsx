// // import React from "react";
// // import { Link } from 'react-scroll';

// // const Navbar = () => {
// //   return (
// //     <>
// //       <div class="flex md:px-20 px-5 py-4 fixed left-0 right-0 top-0 z-50 justify-between items-center bg-gray-600 md:bg-white border-b border-gray-300 flex-wrap">
// //          <div class="flex items-center ">
// //           <img src="https://gennextit.com/assets/Frontend/logo/Gennextlogoxdarkblue.png" className="w-[120px] md:w-[160px]"></img>
// //           </div>
// //           <div>
// //             <p>91 66789345678</p>
// //             <p>91 66789345678</p>
// //           </div>
// //           <div>

// //           </div>
// //         </div>
// //     </>
// //     // <div>
// //     //   <div class="flex md:px-20 px-5 py-4 fixed left-0 right-0 top-0 z-50 justify-between items-center bg-gray-600 md:bg-white border-b border-gray-300 flex-wrap">
// //     //     <div class="flex items-center">
// //     //     <img src="https://gennextit.com/assets/Frontend/logo/Gennextlogoxdarkblue.png" className="w-[120px] md:w-[160px]"></img>

// //     //     </div>

// //     //     <div class="flex items-center gap-2">
// //     //       <button class="hidden font-sans  md:inline-block px-2 py-1 rounded-md text-gray-500 hover:text-blue-400" style={{fontSize:"18px"}}>
// //     //         Production
// //     //       </button>
// //     //       <button class="hidden md:inline-block px-2 py-1 rounded-md text-gray-500 hover:text-blue-400" style={{fontSize:"18px"}}>
// //     //         Virtual CTO
// //     //       </button>
// //     //       <button class="hidden md:inline-block px-2 py-1 rounded-md text-gray-500 hover:text-blue-400" style={{fontSize:"18px"}}>About</button>
// //     //       <button class="sm:border px-2 py-1 rounded-md">
// //     //         <svg
// //     //           xmlns="http://www.w3.org/2000/svg"
// //     //           class="h-6 w-6 text-white md:hover:text-gray-500 md:text-gray-700"
// //     //           fill="none"
// //     //           viewBox="0 0 24 24"
// //     //           stroke="currentColor"
// //     //         >
// //     //           <path
// //     //             stroke-linecap="round"
// //     //             stroke-linejoin="round"
// //     //             stroke-width="2"
// //     //             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
// //     //           />
// //     //         </svg>

// //     //       </button>
// //     //       <li className='rounded-md bg-gradient-to-br list-none from-blue-500 to-blue-400 px-3 py-2 font-dm text-sm font-medium text-white shadow-md shadow-blue-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03] cursor-pointer' style={{fontSize:"16px"}}><Link to='contact' smooth={true} offset={-10} duration={500}>Contact us</Link></li>

// //     //       <Link to="/contactus"><a
// //     //         class="rounded-md bg-gradient-to-br from-blue-300 to-blue-200 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-blue-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
// //     //       >
// //     //        Contact us
// //     //       </a></Link>{" "}

// //     //     </div>
// //     //   </div>
// //     // </div>
// //   );
// // };

// // export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// // import { NavLink } from 'react-router-dom';
// // import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const [sticky, setsticky] = useState(false);
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       window.scrollY > 50 ? setsticky(true) : setsticky(false);
//     });
//   }, []);
//   return (
//     <>
//       <nav
//         className={`bg-blue-300 sm:bg-white px-4 md:px-14 font-serif w-[100%] py-2 text-[#fff] fixed top-0 left-0  flex items-center justify-between z-10 ${
//           sticky
//             ? " bg-blue-300 sm:bg-white z-10 text-gray-600 md:pt-2 shadow-xl"
//             : ""
//         }`}
//       >
//         <a href="https://www.gennextit.com/">
//           <img
//             src={` ${
//               sticky
//                 ? "https://gennextit.com/assets/Frontend/logo/Gennextlogoxdarkblue.png"
//                 : "https://gennextit.com/assets/Frontend/logo/Gennextlogoxdarkblue.png"
//             }`}
//             alt="image"
//             className="w-[100px] md:w-[150px] "
//           />
//         </a>
//         <div
//           className=" hidden lg:flex gap-6 font-sans text-blue-700"
//           style={{ fontSize: "17px", fontFamily: "sans-serif" }}
//         >
//           <p>&#9990; +91-78400 79095 </p>
//           <p>&#9990; +91-120-4994499</p>
//           {/* &#128222; */}
//         </div>
//         <ul className="text-sm md:bg-gradient-to-r from-blue-500 to-blue-700 py-1.5 rounded-full">
//           <li
//             className="inline-block sm:hidden bg-white text-blue-700 mr-[5px] py-1 px-4 rounded-full cursor-pointer"
//             style={{ fontFamily: "sans-serif" }}
//           >
//             Contact us
//           </li>
//         </ul>
//         <ul className="text-sm md:bg-gradient-to-r from-blue-500 to-blue-700 py-1.5 rounded-full">
         

//           <Link
//             to="https://www.gennextit.com/about"
//             className="hidden md:inline-block hover:bg-blue-500 mx-[5px] py-1 px-4 rounded-full cursor-pointer "
//             style={{ fontFamily: "sans-serif" }}
//           >
//             About us
//           </Link>
//           <Link
//             to="https://www.gennextit.com/career"
//             className="hidden md:inline-block hover:bg-blue-500 mx-[5px] py-1 px-4 rounded-full cursor-pointer "
//             style={{ fontFamily: "sans-serif" }}
//           >
//             Career
//           </Link>
//           <Link
//             to="https://www.gennextit.com/training"
//             className="hidden md:inline-block hover:bg-blue-500 mx-[5px] py-1 px-4 rounded-full cursor-pointer "
//             style={{ fontFamily: "sans-serif" }}
//           >
//             Training
//           </Link>
//           <li
//             className="hidden md:inline-block hover:bg-blue-500 mx-[5px] py-1 px-4 rounded-full cursor-pointe"
//             style={{ transition: "all 0.3s ease 0s", fontFamily: "sans-serif" }}
//           >
//             <a href="#" onClick={toggleMenu}>
//               Services{" "}
//               <span className="ml-1" style={{ fontSize: "9px" }}>
//                 &#9660;
//               </span>
//             </a>
//             {isOpen && (
//               <div className="absolute mt-6 bg-white shadow-lg grid grid-cols-4 rounded-md md:right-60 h-[200px] w-[800px]">
//                 <div
//                   className="grid-cols-3 px-2"
//                   style={{ fontFamily: "sans-serif" }}
//                 >
//                   <p
//                     className=" font-semibold text-gray-700  pb-2"
//                     style={{ fontSize: "15px", fontFamily: "sans-serif" }}
//                   >
//                     IT Consultancy
//                   </p>
//                   <Link
//                     to="https://www.gennextit.com/services/it-advisory"
//                     className="block text-gray-800 pb-2 hover:text-blue-500"
//                   >
//                     IT Advisory and Consulting
//                   </Link>
//                   <Link
//                     to="https://www.gennextit.com/services/it-audits"
//                     className="block text-gray-800 pb-2 hover:text-blue-500"
//                   >
//                     IT Audits
//                   </Link>
//                 </div>
//                 <div
//                   className="grid-cols-3 px-2"
//                   style={{ fontFamily: "sans-serif" }}
//                 >
//                   <p
//                     className=" font-semibold text-gray-700  pb-2"
//                     style={{ fontSize: "15px", fontFamily: "sans-serif" }}
//                   >
//                     Application Development
//                   </p>
//                   <Link
//                     to="https://www.gennextit.com/services/web-application-development-and-maintenance"
//                     className="block text-gray-800 pb-2 hover:text-blue-500"
//                   >
//                     Web Application Development And Maintenance
//                   </Link>
//                   <Link
//                     to="https://www.gennextit.com/services/mobile-applications"
//                     className="block text-gray-800 pb-2 hover:text-blue-500"
//                   >
//                     Mobile Applications
//                   </Link>
//                   <Link
//                     to="#"
//                     className="block text-gray-800 pb-2 hover:text-blue-500"
//                   >
//                     Others
//                   </Link>
//                 </div>
//                 <div
//                   className="grid-cols-3 px-2"
//                   style={{ fontFamily: "sans-serif" }}
//                 >
//                   <p
//                     className=" font-semibold text-gray-700  pb-2"
//                     style={{ fontSize: "15px" }}
//                   >
//                     IT & Telecom Training
//                   </p>
//                 </div>
//                 <div
//                   className="grid-cols-3 px-2"
//                   style={{ fontFamily: "sans-serif" }}
//                 >
//                   <p
//                     className=" font-semibold text-gray-700  pb-2"
//                     style={{ fontSize: "15px" }}
//                   >
//                     Corporate Training
//                   </p>
//                   <Link
//                     to="https://www.gennextit.com/services/web-development"
//                     className="block text-gray-800 pb-2 hover:text-blue-500"
//                   >
//                     Web Development
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </li>

//           <Link
//             to="https://www.gennextit.com/contact"
//             className="hidden md:inline-block bg-white text-blue-700 mr-[5px] py-1 px-4 rounded-full cursor-pointer"
//             style={{ fontFamily: "sans-serif" }}
//           >
//             Contact us
//           </Link>
//         </ul>
//         <div className="-mr-2 flex md:hidden">
//             <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//               {isOpen ? (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg
//               class="w-6 h-6 inline-block md:hidden text-white sm:text-blue-700"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//               )}
//             </button>
//           </div>
//           {isOpen && (
//         <div className="md:hidden">
//           <div className="fixed inset-0 flex z-50">
//             <div className="flex-shrink-0 w-64 bg-white shadow-md transform transition-transform ease-in-out duration-300">
//             <nav className="bg-blue-300">
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
//                   Home
//                 </a>
//             </nav>
//               <div className="px-4  py-6">
               
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
//                   Services
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
//                   About
//                 </a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
//                   Contact
//                 </a>
//               </div>
//             </div>
//             <div className="fixed inset-0 bg-black opacity-15" onClick={toggleMenu}></div>
//           </div>
//         </div>
//       )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;




















import React, {useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', link:'https://www.gennextit.com/' },
    { id: 2, text: 'Services' , link:'' },
    { id: 3, text: 'About', link:'https://www.gennextit.com/about' },
    { id: 4, text: 'Career', link:'https://www.gennextit.com/career' },
    { id: 5, text: 'training', link:'https://www.gennextit.com/training' },
    { id: 6, text: 'Contact', link: '' },
  ];

  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    });
  }, []);

  return (
    <div className={`bg-blue-300 sm:bg-white px-4 md:px-14 font-serif w-[100%] py-2 text-[#fff] fixed top-0 left-0  flex items-center justify-between z-10 ${
       sticky
            ? " bg-blue-300 sm:bg-white z-10 text-gray-600 md:pt-2 shadow-xl"
            : ""
        }`}
      >
      
      {/* Logo */}
      <a href="https://www.gennextit.com/">
          <img
            src={` ${
              sticky
                ? "https://gennextit.com/assets/Frontend/logo/Gennextlogoxdarkblue.png"
                : "https://gennextit.com/assets/Frontend/logo/Gennextlogoxdarkblue.png"
            }`}
            alt="image"
            className="w-[100px] md:w-[150px] "
          />
        </a>
      <div
          className=" hidden lg:flex gap-6 font-sans text-blue-700"
          style={{ fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <p>&#9990; +91-78400 79095 </p>
          <p>&#9990; +91-120-4994499</p>
          {/* &#128222; */}
        </div>
        {/* // contact us foe mobile view */}
        <ul className="text-sm md:bg-gradient-to-r from-blue-500 to-blue-700 py-1.5 rounded-full">
          <li
            className="inline-block sm:hidden bg-white text-blue-700 mr-[5px] py-1 px-4 rounded-full cursor-pointer"
            style={{ fontFamily: "sans-serif" }}
          >
            Contact us
          </li>
        </ul>

      {/* Desktop Navigation */}
      <ul className="text-sm md:bg-gradient-to-r from-blue-500 to-blue-700 py-1.5 rounded-full">
         

         <Link
           to="https://www.gennextit.com/about"
           className="hidden md:inline-block hover:bg-blue-500 mx-[5px] py-1 px-4 rounded-full cursor-pointer "
           style={{ fontFamily: "sans-serif" }}
         >
           About us
         </Link>
         <Link
           to="https://www.gennextit.com/career"
           className="hidden md:inline-block hover:bg-blue-500 mx-[5px] py-1 px-4 rounded-full cursor-pointer "
           style={{ fontFamily: "sans-serif" }}
         >
           Career
         </Link>
         <Link
           to="https://www.gennextit.com/training"
           className="hidden md:inline-block hover:bg-blue-500 mx-[5px] py-1 px-4 rounded-full cursor-pointer "
           style={{ fontFamily: "sans-serif" }}
         >
           Training
         </Link>
         <li
           className="hidden md:inline-block hover:bg-blue-500 mx-[5px] py-1 px-4 rounded-full cursor-pointe"
           style={{ transition: "all 0.3s ease 0s", fontFamily: "sans-serif" }}
         >
           <a href="#" onClick={toggleMenu}>
             Services{" "}
             <span className="ml-1" style={{ fontSize: "9px" }}>
               &#9660;
             </span>
           </a>
           {isOpen && (
             <div className="absolute mt-6 bg-white shadow-lg grid grid-cols-4 rounded-md md:right-60 h-[200px] w-[800px]">
               <div
                 className="grid-cols-3 px-2"
                 style={{ fontFamily: "sans-serif" }}
               >
                 <p
                   className=" font-semibold text-gray-700  pb-2"
                   style={{ fontSize: "15px", fontFamily: "sans-serif" }}
                 >
                   IT Consultancy
                 </p>
                 <Link
                   to="https://www.gennextit.com/services/it-advisory"
                   className="block text-gray-800 pb-2 hover:text-blue-500"
                 >
                   IT Advisory and Consulting
                 </Link>
                 <Link
                   to="https://www.gennextit.com/services/it-audits"
                   className="block text-gray-800 pb-2 hover:text-blue-500"
                 >
                   IT Audits
                 </Link>
               </div>
               <div
                 className="grid-cols-3 px-2"
                 style={{ fontFamily: "sans-serif" }}
               >
                 <p
                   className=" font-semibold text-gray-700  pb-2"
                   style={{ fontSize: "15px", fontFamily: "sans-serif" }}
                 >
                   Application Development
                 </p>
                 <Link
                   to="https://www.gennextit.com/services/web-application-development-and-maintenance"
                   className="block text-gray-800 pb-2 hover:text-blue-500"
                 >
                   Web Application Development And Maintenance
                 </Link>
                 <Link
                   to="https://www.gennextit.com/services/mobile-applications"
                   className="block text-gray-800 pb-2 hover:text-blue-500"
                 >
                   Mobile Applications
                 </Link>
                 <Link
                   to="#"
                   className="block text-gray-800 pb-2 hover:text-blue-500"
                 >
                   Others
                 </Link>
               </div>
               <div
                 className="grid-cols-3 px-2"
                 style={{ fontFamily: "sans-serif" }}
               >
                 <p
                   className=" font-semibold text-gray-700  pb-2"
                   style={{ fontSize: "15px" }}
                 >
                   IT & Telecom Training
                 </p>
               </div>
               <div
                 className="grid-cols-3 px-2"
                 style={{ fontFamily: "sans-serif" }}
               >
                 <p
                   className=" font-semibold text-gray-700  pb-2"
                   style={{ fontSize: "15px" }}
                 >
                   Corporate Training
                 </p>
                 <Link
                   to="https://www.gennextit.com/services/web-development"
                   className="block text-gray-800 pb-2 hover:text-blue-500"
                 >
                   Web Development
                 </Link>
               </div>
             </div>
           )}
         </li>

         <Link
           to="https://www.gennextit.com/contact"
           className="hidden md:inline-block bg-white text-blue-700 mr-[5px] py-1 px-4 rounded-full cursor-pointer"
           style={{ fontFamily: "sans-serif" }}
         >
           Contact us
         </Link>
       </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[85%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <a href="https://www.gennextit.com/">
          <img
            src="https://gennextit.com/assets/Frontend/logo/Gennextlogoxdarkblue.png"
      
            alt="image"
            className="w-[100px] md:w-[150px] ml-5"
          />
        </a>
        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to={item.link}
            key={item.id}
            className='p-4 flex flex-row  border-b rounded-xl hover:bg-[#1600df] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
