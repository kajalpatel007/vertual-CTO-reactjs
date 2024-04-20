import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
     const[name, setname]= useState()
     const[email, setemail]= useState()
     const[password, setpassword]= useState()
     const[phone, setphone]= useState()
     const[company, setcompany]= useState()
     const[numberofemployee, setnumberofemployee]= useState()
    //  const[regestrationdate, setregestrationdate]= useState()
     const navigate = useNavigate()

     const handleSubmit = (e) => {
          e.preventDefault()
          axios.post('http://localhost:3001/register', {name, email, password, phone, company, numberofemployee
          // , regestrationdate
        })
          .then(result => console.log(result))
          .catch(err => console.log(err))
          navigate('/login')
  
     }

       return (
    // <div className='flex justify-center items-center bg-gray-500 vh-[100%]'>
    //  <div className='bg-white p-3 rounded w-25'>
    //       <h2>Register</h2>
    //       <form onSubmit={handleSubmit}>
    //            <div className='mb-3'>
    //              <label htmlFor='email'>
    //                <strong>Name</strong>
    //              </label>
    //              <input type='text' placeholder='enter name' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e) => setname(e.target.value)}/>
    //            </div>
    //            <div className='mb-3'>
    //              <label htmlFor='Email'>
    //                <strong>Email</strong>
    //              </label>
    //              <input type='email' placeholder='enter email' autoComplete='off' name='email' className='form-control rounded-0'  onChange={(e) => setemail(e.target.value)}/>
    //            </div>
    //            <div className='mb-3'>
    //              <label htmlFor='Email'>
    //                <strong>Password</strong>
    //              </label>
    //              <input type='Password' placeholder='enter password' autoComplete='off' name='password' className='form-control rounded-0'  onChange={(e) => setpassword(e.target.value)}/>
    //            </div>
    //            <button type='submit' className='btn btn-success w-100 rounded-0'>
    //                 Register
    //            </button>
    //       </form>
    //       <p>Already have an account</p>
    //       <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decor'>Login</Link>
    //  </div>
      
    // </div>

    <>
      
  <div class="max-w-lg mx-auto  bg-white rounded-lg shadow-xl px-8 py-10 flex flex-col items-center">
    <h1 class="text-xl font-bold text-center text-gray-700  mb-8">Welcome to Our website</h1>
    <form action="#" class="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
     
      <div class="flex items-start flex-col justify-start">
        <label htmlFor="username" class="text-sm text-gray-700  mr-2">Name:</label>
        <input type="text" id="username" name="username"  class="w-full px-3   py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500" onChange={(e) => setname(e.target.value)} />
      </div>

      <div class="flex items-start flex-col justify-start">
        <label htmlFor="email" class="text-sm text-gray-700  mr-2">Email:</label>
        <input type="email" id="email"  name="email" class="w-full px-3   py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"  onChange={(e) => setemail(e.target.value)} />
      </div>
      <div class="flex items-start flex-col justify-start">
        <label htmlFor="email" class="text-sm text-gray-700  mr-2">Password:</label>
        <input type="password" id="password" name="password" class="w-full px-3   py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500"  onChange={(e) => setpassword(e.target.value)}/>
      </div>
      <div class="flex items-start flex-col justify-start">
        <label htmlFor="email" class="text-sm text-gray-700  mr-2">Phone:</label>
        <input type="number" id="phone" name="phone"  class="w-full px-3   py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"  onChange={(e) => setphone(e.target.value)} />
      </div>
       <div class="flex items-start flex-col justify-start">
        <label htmlFor="email" class="text-sm text-gray-700  mr-2">Company name:</label>
        <input type="text" id="company" name="company"  class="w-full px-3   py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"  onChange={(e) => setcompany(e.target.value)} />
      </div> 
      <div class="flex items-start flex-col justify-start">
        <label htmlFor="email" class="text-sm text-gray-700  mr-2">Number of employee:</label>
        <input type="number" id="numberofemployee"  name="numberofemployee" class="w-full px-3   py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"  onChange={(e) => setnumberofemployee(e.target.value)} />
      </div> 

      

      {/* <div class="flex items-start flex-col justify-start">
        <label htmlFor="email" class="text-sm text-gray-700  mr-2">bussiness Regestration Date:</label>
        <input type="date" id="regestrationdate" required name="regestrationdate" class="w-full px-3   py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500"  onChange={(e) => setregestrationdate(e.target.value)} />
      </div> */}

      <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Register</button>
    </form>

    <div class="mt-4 text-center">
      <span class="text-sm text-gray-500 ">Already have an account? </span>
      <Link to="/login"><a href="#" class="text-blue-500 hover:text-blue-600">Login</a></Link>
    </div>
  
  </div>

    </>
  )
}

export default Signup