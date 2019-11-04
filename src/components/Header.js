import React from 'react'
import Typewrite from './Typewrite'

export default function Header (props) {
  const { active, setActive } = props
  return (
    <div>
      <header id='home' className='header-area'>
        <div className='navigation fixed-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <nav className='navbar navbar-expand-lg'>
                  <a className='navbar-brand' href='index.html'>
                    <img
                      src='assets/images/Knight.png'
                      height='40'
                      alt='Logo'
                    />
                  </a>
                  <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span className='toggler-icon' />
                    <span className='toggler-icon' />
                    <span className='toggler-icon' />
                  </button>

                  <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                  >
                    <ul className='navbar-nav ml-auto'>
                      <li
                        className={`nav-item   ${active === 'home' &&
                          'active'}`}
                      >
                        <a href='#home' onClick={() => setActive('home')}>
                          Home
                        </a>
                      </li>
                      <li
                        className={`nav-item   ${active === 'about' &&
                          'active'}`}
                      >
                        <a href='#about' onClick={() => setActive('about')}>
                          About
                        </a>
                      </li>
                      <li
                        className={`nav-item   ${active === 'work' &&
                          'active'}`}
                      >
                        <a href='#work' onClick={() => setActive('work')}>
                          Portfolio
                        </a>
                      </li>

                      <li
                        className={`nav-item   ${active === 'contact' &&
                          'active'}`}
                      >
                        <a href='#contact' onClick={() => setActive('contact')}>
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id='parallax' className='header-content d-flex align-items-center'>
        <canvas id='c' />
        {/* <div className='header-shape shape-one layer' data-depth='0.10'>
          <img src='assets/images/banner/shape/shape-1.png' alt='Shape' />
        </div>
        <div className='header-shape shape-tow layer' data-depth='0.30'>
          <img src='assets/images/banner/shape/shape-2.png' alt='Shape' />
        </div>
        <div className='header-shape shape-three layer' data-depth='0.40'>
          <img src='assets/images/banner/shape/shape-3.png' alt='Shape' />
        </div>
        <div className='header-shape shape-fore layer' data-depth='0.60'>
          <img src='assets/images/banner/shape/shape-2.png' alt='Shape' />
        </div>
        <div className='header-shape shape-five layer' data-depth='0.20'>
          <img src='assets/images/banner/shape/shape-1.png' alt='Shape' />
        </div>
        <div className='header-shape shape-six layer' data-depth='0.15'>
          <img src='assets/images/banner/shape/shape-4.png' alt='Shape' />
        </div>
        <div className='header-shape shape-seven layer' data-depth='0.50'>
          <img src='assets/images/banner/shape/shape-5.png' alt='Shape' />
        </div>
        <div className='header-shape shape-eight layer' data-depth='0.40'>
          <img src='assets/images/banner/shape/shape-3.png' alt='Shape' />
        </div>
        <div className='header-shape shape-nine layer' data-depth='0.20'>
          <img src='assets/images/banner/shape/shape-6.png' alt='Shape' />
        </div>
        <div className='header-shape shape-ten layer' data-depth='0.30'>
          <img src='assets/images/banner/shape/shape-3.png' alt='Shape' />
        </div> */}
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-5 col-lg-6'>
              <div className='header-content-right'>
                <h4 className='sub-title' style={{ color: 'white' }}>
                  Hello, I’m
                </h4>
                <h1 className='title' style={{ color: 'white' }}>
                  Nguyen Anh Thi
                </h1>
                <h3>
                  <Typewrite />
                </h3>
                <a className='main-btn' href='#work'>
                  View my Work
                </a>
              </div>
            </div>
            <div className='col-lg-6 offset-xl-1'>
              <div style={{ border: '5px solid white' }}>
                <img src='assets/images/avatar.jpg' alt='hero' />
              </div>
            </div>
          </div>
        </div>
        <div className='header-social'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='header-social-icon'>
                  <ul>
                    <li>
                      <a href='#'>
                        <i className='lni-facebook-filled' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='lni-twitter-original' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='lni-behance-original' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='lni-linkedin-original' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
