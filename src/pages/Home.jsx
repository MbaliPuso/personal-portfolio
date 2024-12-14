import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import WorkWithMe from '../components/WorkWithMe'

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WorkWithMe />
    </>
  )
}

export default Home