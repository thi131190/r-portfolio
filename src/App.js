/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './App.css'
import Preloader from './components/Preloader'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App () {
  const [active, setActive] = useState('home')

  return (
    <div className='App'>
      <Preloader />
      <Header active={active} setActive={setActive} />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <a href='#' className='back-to-top' onClick={() => setActive('home')}>
        <i className='lni-chevron-up' />
      </a>
    </div>
  )
}

export default App
