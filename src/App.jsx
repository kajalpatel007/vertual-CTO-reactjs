import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contactus"

import About from "./Pages/About"


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      

    </Routes>
    
    </>
  )
}

export default App
// Aman Bhatt here.