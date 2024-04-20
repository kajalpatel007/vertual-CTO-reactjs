import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contactus"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import About from "./Pages/About"
import AdminDashboard from "./Pages/AdminDashboard"

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Signup /> } />
      <Route path='/login' element={<Login />} />
      <Route path='/admindashboard' element={<AdminDashboard />} />
    </Routes>
    
    </>
  )
}

export default App
