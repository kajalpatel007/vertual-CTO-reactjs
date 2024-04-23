import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contactus"
import Signup from "./Pages/Signup"
import About from "./Pages/About"

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Signup /> } />
      
    </Routes>
    
    </>
  )
}

export default App
