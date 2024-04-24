// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import Navbar from '../components/Navbar'
// // import ImageUpload from './Imageupload'

// const Signup = () => {

//      const[name, setname]= useState()
//      const[email, setemail]= useState()
//      const[password, setpassword]= useState()
//      const[phone, setphone]= useState()
//      const[company, setcompany]= useState()
//      const[numberofemployee, setnumberofemployee]= useState()
//     //  const[image, setimage]= useState(null)
    


//      const navigate = useNavigate()
//     //  const inputref = useRef(null);


//      const handleSubmit = (e) => {
//           e.preventDefault()
//           axios.post('http://localhost:3001/register', {name, email, password, phone, company, numberofemployee
//           // , regestrationdate
//         })
//           .then(result => console.log(result))
//           .catch(err => console.log(err))
//           navigate('/login')
  
//      };


//        return (
//         <>
      
//   <Navbar />
//   <div className="max-w-lg mx-auto  bg-white rounded-lg shadow-xl px-8 py-10 flex flex-col items-center">
//     <h1 className="text-xl font-bold text-center text-gray-700  mb-8">Welcome to Our website</h1>
//     <form action="#" className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
     
//       <div className="flex items-start flex-col justify-start">
//         <label htmlFor="username" className="text-sm text-gray-700  mr-2">Name:</label>
//         <input type="text" id="username" name="username"  className="w-full px-3   py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500" onChange={(e) => setname(e.target.value)} />
//       </div>
//       {/* <div className="flex items-start flex-col justify-start">
//         <label htmlFor="username" className="text-sm text-gray-700  mr-2">email:</label>
//         <input type="email" id="email" name="email" placeholder='abc'  className="w-full px-3   py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500" onChange={(e) => setemail(e.target.value)} />
//       </div> */}

//       <div className="col-span-12 sm:col-span-4">
//       <label htmlFor="email"  className="block text-sm font-medium text-gray-700">Email</label>
//        <input type="email" name="email" id="email" placeholder='axample@gmail.com' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"  onChange={(e) => setemail(e.target.value)} />
//         </div>
//       <div className="flex items-start flex-col justify-start">
//         <label htmlFor="email" className="text-sm text-gray-700  mr-2">Password:</label>
//         <input type="password" id="password" name="password" className="w-full px-3   py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500"  onChange={(e) => setpassword(e.target.value)}/>
//       </div>
//       <div className="flex items-start flex-col justify-start">
//         <label htmlFor="email" className="text-sm text-gray-700  mr-2">Phone:</label>
//         <input type="number" id="phone" name="phone"  className="w-full px-3   py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"  onChange={(e) => setphone(e.target.value)} />
//       </div>
//        <div className="flex items-start flex-col justify-start">
//         <label htmlFor="email" className="text-sm text-gray-700  mr-2">Company name:</label>
//         <input type="text" id="company" name="company"  className="w-full px-3   py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"  onChange={(e) => setcompany(e.target.value)} />
//       </div> 
//       <div className="flex items-start flex-col justify-start">
//         <label htmlFor="email" className="text-sm text-gray-700  mr-2">Number of employee:</label>
//         <input type="number" id="numberofemployee"  name="numberofemployee" className="w-full px-3   py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"  onChange={(e) => setnumberofemployee(e.target.value)} />
//       </div>
   
//       <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Register</button>
//     </form>

//     <div className="mt-4 text-center">
//       <span className="text-sm text-gray-500 ">Already have an account? </span>
//       <Link to="/login"><a href="#" className="text-blue-500 hover:text-blue-600">Login</a></Link>
//     </div>
  
//   </div>

//     </>
//   )
// }

// export default Signup

///////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import ImageUpload from './Imageupload'
import Navbar from '../components/Navbar'
import React from 'react'

const Signup = () => {
  

      const[name, setname]= useState()
     const[email, setemail]= useState()
     const[password, setpassword]= useState()
     const[phone, setphone]= useState()
     const[url, seturl]= useState()
     const[entityType, setentityType]= useState()
     const[gst, setgst]= useState()
     const[relationm, setrelationm]= useState()
     const[company, setcompany]= useState()
     const[country, setcountry]= useState()
     const[branch, setbranch]= useState()
     const[state, setstate]= useState()
     const[city, setcity]= useState()
     const[address, setaddress]= useState()
     const[code, setcode]= useState()
     const[about, setabout]= useState()
     const[customerstatus, setcustomerstatus]= useState()
     const[numberofemployee, setnumberofemployee]= useState()

          const navigate = useNavigate()
    


     const handleSubmit = (e) => {
          e.preventDefault()
          axios.post('http://localhost:3001/register', {name, email, password, phone, company, numberofemployee, entityType, gst, url, about, customerstatus, relationm, country, branch, state, address, code, city,
          //  url, ,
          // , regestrationdate
        })
          .then(result => alert("Successfully registered"))
          .catch(err => console.log(err))
          navigate('/imageupload')
  
     };

   


  return (
    <div className='px-10'>
    <Navbar />
      <form className="divide-y divide-gray-200 lg:col-span-9" onSubmit={handleSubmit}>
            <div className="py-6 px-4 sm:p-6 lg:pb-8">
              <div>
                <h2 className="text-lg font-medium leading-6 text-gray-900">Vendor Registration form</h2>
                <p className="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what
                  you share.</p>
              </div>

              <div className="mt-6 flex flex-col lg:flex-row">
                <div className="flex-grow space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">User name</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      {/* <span className="inline-flex items-center rounded-l-md rounded-r-md border  border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"></span> */}
                      <input type="text" name="username" id="username" className="inline-flex items-center rounded-l-md rounded-r-md border  border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm" onChange={(e) => setname(e.target.value)} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about"  className="block text-sm font-medium text-gray-700">About</label>
                    <div className="mt-1">
                      <textarea id="about" name="about" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm" onChange={(e) => setabout(e.target.value)} ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>
                </div>

                <div className="flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                  <p className="text-sm font-medium text-gray-700" aria-hidden="true">Photo</p>
                  {/* <ImageUpload /> */}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-12 gap-6">
             

                <div className="col-span-12">
                  <label htmlFor="url"  className="block text-sm font-medium text-gray-700">URL <span className='text-red-500'> * </span></label>
                  <input type="text" name="url" id="url" className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" onChange={(e) => seturl(e.target.value)} />
                </div>

                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Company <span className='text-red-500'> * </span></label>
                  <input type="text" name="company" id="company" placeholder='Enter Company Name' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" onChange={(e) => setcompany(e.target.value)} />
                </div>
 
                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="Entity" className="block text-sm font-medium text-gray-700">Entity Type <span className='text-red-500'> * </span></label>
                  <input type="text" name="entity" id="entity" placeholder='Enter Entity Type' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" onChange={(e) => setentityType(e.target.value)} />
                </div>

                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="RelationshipM" className="block text-sm font-medium text-gray-700">Relationship Manager <span className='text-red-500'> * </span></label>
                  <input type="text" name="relationm" id="relationm" placeholder='Select' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" onChange={(e) => setrelationm(e.target.value)} />
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="email"  className="block text-sm font-medium text-gray-700">GST/VAT No</label>
                  <input type="text" name="gst" id="gst"  placeholder='18346HFEXLIYTEX' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" onChange={(e) => setgst(e.target.value)} />
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="email"  className="block text-sm font-medium text-gray-700">Customer Status <span className='text-red-500'> * </span></label>
                  <input type="text" name="customerstatus" id="customerstatus"  placeholder='Enter Customer status' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" onChange={(e) => setcustomerstatus (e.target.value)}/>
                </div> 
                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="email"  className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" id="email" placeholder='axample@gmail.com' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"  onChange={(e) => setemail(e.target.value)} />
                </div>
                
                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="email"  className="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" name="password" id="password" placeholder='password' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"  onChange={(e) => setpassword(e.target.value)} />
                  <input type="checkbox" className="mt-1 block w-full rounded-md border border-gray-300 sm:-mt-6"/>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="email"  className="block text-sm font-medium text-gray-700">No.of Employee</label>
                  <input type="number" name="nofemployee" id="nofemployee" placeholder='No.of Employee' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" onChange={(e) => setnumberofemployee(e.target.value)}/>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="email"  className="block text-sm font-medium text-gray-700">Branch <span className='text-red-500'> * </span></label>
                  <input type="text" name="branch" id="branch"  placeholder='Enter Branch' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" onChange={(e) => setbranch(e.target.value)} />
                </div>
                {/* <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Type <span className='text-red-500'> * </span></label>
                  <input type="text" name="type" id="type" placeholder='Eg.School, Institute,Factory,etc' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                </div> */}
                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile.No <span className='text-red-500'> * </span></label>
                  <input type="number" name="number" id="number" placeholder='9156308900' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" onChange={(e) => setphone(e.target.value)} />
                </div>
                </div>

                <div className="block text-md font-semibold mt-6 text-gray-400">Address <span className='text-red-500'> * </span></div>

                <div className="mt-2 grid grid-cols-12 gap-6">
                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                  <select placeholder='India' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" onChange={(e) => setcountry(e.target.value)}>
                    <option>India</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>America</option>
                  </select>

                </div>
                 <div className="col-span-12 sm:col-span-4 ">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State <span className='text-red-500'> * </span></label>
                  <select placeholder='India' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" onChange={(e) => setstate(e.target.value)}>
                    <option>Madhya Pradesh</option>
                    <option>Mumbai</option>
                    <option>Uk</option>
                    <option>Utter Pradesh</option>
                    <option>Bihar</option>
                    <option>Punjab</option>
                    <option>Maharastra</option>
                  </select>               
                 </div>
                <div className="col-span-12 sm:col-span-4 ">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City <span className='text-red-500'> * </span></label>
                  <select placeholder='India' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" onChange={(e) => setcity(e.target.value)}>
                    <option>select your city</option>
                    <option>abccc</option>
                    <option>Uk</option>
                  
                  </select>                 
                  </div> 
                <div className='col-span-12 sm:col-span-8'>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address <span className='text-red-500'> * </span></label>
                    <div className="mt-1">
                      <textarea id="address" name="about" rows="3" placeholder='Enter address' className="mt-1 block w-full  rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm" onChange={(e) => setaddress(e.target.value)}></textarea>
                    </div>
                   
                  </div>
                <div className="col-span-12 sm:col-span-4 ">
                  <label htmlFor="pin" className="block text-sm font-medium text-gray-700">Pin/Zip <span className='text-red-500'> * </span></label>
                  <input type="text" name="pin" id="pin"  placeholder='Enter Pin/Zip code' className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" onChange={(e) => setcode(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-200 pt-6">
              <div className="px-4 sm:px-6">
               
                <ul role="list" className="mt-2 divide-y divide-gray-200">
                  <li className="flex items-center justify-between py-4" x-data="{ on: true }">
                    <div className="flex flex-col">
                    <div className="mt-4 text-center">
      <span className="text-sm text-gray-500 ">Already have an account? </span>
      <Link to="/login"><a href="#" className="text-blue-500 hover:text-blue-600">Login</a></Link>
   </div>
               </div>
                    
                  </li>
                 
                </ul>
              </div>
              <div className="mt-4 flex justify-end py-4 px-4 sm:px-6">
                <button type="button" className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Cancel</button>
                <button type="submit" className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Save</button>
              </div>
            </div>
          </form>
    </div>
  return (
    <div>Signup</div>
  )
}

export default Signup



// import React from 'react'

// const Signup = () => {

//   function uploadFile() {
//     var fileInput = document.getElementById('fileInput');
//     var file = fileInput.files[0];
    
//     if (file) {
//         var formData = new FormData();
//         formData.append('file', file);

//         // Send formData to server at http://localhost:8080/upload using fetch
//         fetch('http://localhost:5173', {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => {
//             if (response.ok) {
//                 alert('File uploaded successfully.');
//             } else {
//                 alert('File upload failed.');
//             }
//         })
//         .catch(error => {
//             alert('Error:', error);
//         });
//     } else {
//         alert('No file selected.');
//     }
// }
//   return (
//     <div>
//       <input type="file" id="fileInput" />
//     <button onClick={uploadFile}>Upload</button>

  
        
//     </div>
//   )
// }

// export default Signup











// import React from 'react'

// const Signup = () => {
//   function uploadFile() {
//     var fileInput = document.getElementById('fileInput');
//     var file = fileInput.files[0];
//     var formData = new FormData();
//     formData.append('file', file);
    
//     fetch('https://api.escuelajs.co/api/v1/files/upload', {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => {
//       if (response.ok) {
//       alert("Your file is Uploaded! Enjoy moti mere")
//         return response.text();
//       } else {
//         throw new Error('Error uploading file.');
//       }
//     })
//     .then(fileUrl => {
//      var getUrl =fileUrl.split(":");
//     var replaceUrl= getUrl[3]+getUrl[4];
//      var makeString =String(replaceUrl);
//      var rep =makeString.replace("}","");
     
//      var repAll = rep.replaceAll('"','');
    
//      /* Yaha jo niche jo link return ho rha isko db me save kr do variable ki value ko yhi main link hai uploaded file ki */
     
//      let yourFileUploadLink= repAll;
//     // alert(yourFileUploadLink);
//        document.getElementById('fileLink').innerHTML = '<a href="' + fileUrl + '" target="_blank">View Uploaded Image</a>';
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       alert('Error uploading file.');
//     });
//   }
//   return (
//     <div>
//       <h2>Upload a File</h2>
// <form id="uploadForm" enctype="multipart/form-data">
//   <input type="file" id="fileInput" name="fileInput" />
//   <button type="button" onclick={uploadFile()}>Upload</button>
// </form>
// <div id="fileLink"></div>


//     </div>
//   )
// }

// export default Signup












