import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="container-fluid position-relative min-vh-100 d-flex flex-column flex-row justify-content-center ">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          zIndex: '-1',
          background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)'
          }}>
          <div className="flex flex-wrap container mx-auto px-8"></div>
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
