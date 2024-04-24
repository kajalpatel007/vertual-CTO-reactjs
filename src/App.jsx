import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contactus"
import Signup from "./Pages/Signup"
import About from "./Pages/About"
import AdminDashboard from "./Pages/AdminDashboard"
import UserDashboard from "./components/UserDashboard"
import ImageUpload from "./Pages/Imageupload"

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Signup /> } />
      
      <Route path="/upload" element={<Signup /> } />
      <Route path='/login' element={<Login />} />
      <Route path='/admindashboard' element={<AdminDashboard />} />
      <Route path='/userdashboard' element={<UserDashboard />} />
      <Route path='/imageupload' element={<ImageUpload />} />

    </Routes>
    
    </>
  )
}

export default App
