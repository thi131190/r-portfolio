import React from 'react'

export default function Portfolio () {
  return (
    <section id='work' className='work-area text-center'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-lg-12'>
            <div className='section-title pb-25 '>
              <h2 className='title'>My Recent Works</h2>
              <p>Check out my lastest projects</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className=' col-sm-6'>
            <div className='single-work text-center mt-30'>
              <div className='work-image'>
                <img src='assets/images/flixie.png' alt='work' />
              </div>
              <div className='work-overlay'>
                <div className='work-content'>
                  <h3 className='work-title'>IMDB REACT</h3>
                  <ul>
                    <li>
                      <a
                        // eslint-disable-next-line react/jsx-no-target-blank
                        target='_blank'
                        className='image-popup'
                        href='https://friendly-northcutt-5d793e.netlify.com/'
                      >
                        <i className='lni-eye' />
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/thi131190/imbd-react'
                        // eslint-disable-next-line react/jsx-no-target-blank
                        target='_blank'
                      >
                        <i className='lni-github' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=' col-sm-6'>
            <div className='single-work text-center mt-30'>
              <div className='work-image'>
                <img src='assets/images/flappy-bird.png' alt='work' />
              </div>
              <div className='work-overlay'>
                <div className='work-content'>
                  <h3 className='work-title'>FLAPPY BIRD JS</h3>
                  <ul>
                    <li>
                      <a
                        className='image-popup'
                        href='https://distracted-ardinghelli-b4256d.netlify.com/'
                        // eslint-disable-next-line react/jsx-no-target-blank
                        target='_blank'
                      >
                        <i className='lni-eye' />
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/thi131190/flappy-bird-js' // eslint-disable-next-line react/jsx-no-target-blank
                        target='_blank'
                      >
                        <i className='lni-github' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='row'>
          <div className='col-lg-12'>
            <div className='work-more text-center mt-50'>
              <a className='main-btn' href='#'>
                more works
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
