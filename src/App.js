import React from 'react'
import './App.css'
import Preloader from './components/Preloader'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App () {
  return (
    <div className='App'>
      <Preloader />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <a href='#' className='back-to-top '>
        <i className='lni-chevron-up' />
      </a>
    </div>
  )
}

export default App
