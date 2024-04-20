import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  
   
      const[email, setemail]= useState()
      const[password, setpassword]= useState()
    
      const navigate = useNavigate()
 
      const handleSubmit = (e) => {
           e.preventDefault()
           axios.post('http://localhost:3001/login', { email, password })
           .then(result => {
             console.log(result)
           if(result.data === "success"){
            navigate('/home')
           }
           
   
      })
      .catch(err => console.log(err))
    
    }
 
        return (
    
     <>
       
   <div className="max-w-lg mx-auto  bg-white rounded-lg shadow-xl px-8 py-10 flex flex-col items-center">
     <h1 className="text-xl font-bold text-center text-gray-700  mb-8">Login</h1>
     <form action="#" className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      
      
 
       <div className="flex items-start flex-col justify-start">
         <label htmlFor="email" className="text-sm text-gray-700  mr-2">Email:</label>
         <input type="email" id="email" name="email" className="w-full px-3   py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"  onChange={(e) => setemail(e.target.value)} />
       </div>
       <div className="flex items-start flex-col justify-start">
         <label htmlFor="email" className="text-sm text-gray-700  mr-2">Password:</label>
         <input type="password" id="password" name="password" className="w-full px-3   py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500"  onChange={(e) => setpassword(e.target.value)}/>
       </div>
    
 
       
 
 
       {/* <Link to="/home"  */}
       <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white required text-center font-medium py-2 px-4 rounded-md shadow-sm">Login</button>
       {/* </Link> */}
     </form>
 
     <div className="mt-4 text-center">
       <span className="text-sm text-gray-500 ">You dont have an account? </span>
       <Link to="/register"><a href="#" className="text-blue-500 hover:text-blue-600">Register here</a></Link>
     </div>
   
   </div>
 
     </>
   )
 }
  

export default Login