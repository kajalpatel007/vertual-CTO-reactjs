import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"


function App() {
  

  return (
    <>
    <Routes>
   
   <Route path='/' element={<Home />} />
   <Route path='/training' />
   <Route path='/about' />
   <Route path='/career' />
   <Route path='/about' />
   <Route path='/services/it-advisory' />
   <Route path='/services/it-audits' />
   <Route path='/services/web-application-development-and-maintenance' />
  </Routes>
   
    
    </>
  )
}

export default App
