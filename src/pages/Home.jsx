import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import WorkWithMe from '../components/WorkWithMe'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WorkWithMe />
        <Contact />
        <Footer />
    </>
  )
}

export default Home