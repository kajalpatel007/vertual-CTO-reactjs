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
import Homenewcard from '../components/Homenewcard'
import Placement from '../components/Placement'
import Infographics from '../components/Infographics'
import CTA from '../components/CTA'
import ChefTechnology from '../components/ChefTechnology'
import Services from '../components/Services'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
   
      <Homenewcard />
      {/* <Challengescard /> */}
      <Placement />
      <Services />
      <Infographics />
      {/* <Weoffer /> */}
      {/* <Collaboration /> */}
      <Testimonial />
      <CTA />
      <ChefTechnology />
      <FAQ />
     <Contact />
     <Footer />
    </div>
  )
}

export default Home