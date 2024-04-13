import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonial from '../components/Testimonial'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Collaboration from '../components/Collaboration'
import Footer from '../components/Footer'
import Challengescard from '../components/Challengescard'
import Weoffer from '../components/Weoffer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Challengescard />
      <Weoffer />
      {/* <Collaboration /> */}
      <Testimonial />
      <FAQ />
     <Contact />
     <Footer />
    </div>
  )
}

export default Home