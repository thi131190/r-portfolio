import React from 'react'

export default function About () {
  return (
    <section id='about' className='about-area pt-125 pb-130'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='section-title text-center'>
              <h2 className='title'>About Me</h2>
              <p>
                My passion is creating, and I find happiness in being a better
                me today than the me yesterday.
              </p>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-6'>
            <div className='about-content mt-50'>
              <h5 className='about-title'>Hi There! I'm Nguyen Anh Thi</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className='clearfix'>
                <li>
                  <div className='single-info d-flex align-items-center'>
                    <div className='info-icon'>
                      <i className='lni-calendar' />
                    </div>
                    <div className='info-text'>
                      <p>
                        <span>Date of birth:</span> 13 Nov 1990
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='single-info d-flex align-items-center'>
                    <div className='info-icon'>
                      <i className='lni-envelope' />
                    </div>
                    <div className='info-text'>
                      <p>
                        <span>Email:</span> thi131190@gmail.com
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='single-info d-flex align-items-center'>
                    <div className='info-icon'>
                      <i className='lni-phone-handset' />
                    </div>
                    <div className='info-text'>
                      <p>
                        <span>Phone:</span> +84-346-806070
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='single-info d-flex align-items-center'>
                    <div className='info-icon'>
                      <i className='lni-map-marker' />
                    </div>
                    <div className='info-text'>
                      <p>
                        <span>Location:</span> 496/41/15 Duong Quang Ham - Ward
                        6 - Go Vap District - HCMC
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-xl-5 offset-xl-1 col-lg-6'>
            <div className='about-skills pt-25'>
              <div className='skill-item mt-25'>
                <div className='skill-header'>
                  <h6 className='skill-title'>HTML</h6>
                  <div className='skill-percentage'>
                    <div className='count-box counted'>
                      <span className='counter'>95</span>
                    </div>
                    %
                  </div>
                </div>
                <div className='skill-bar'>
                  <div className='bar-inner'>
                    <div
                      className='bar progress-line'
                      data-width='80'
                      style={{ width: '90%' }}
                    />
                  </div>
                </div>
              </div>
              <div className='skill-item mt-25'>
                <div className='skill-header'>
                  <h6 className='skill-title'>CSS</h6>
                  <div className='skill-percentage'>
                    <div className='count-box counted'>
                      <span className='counter'>90</span>
                    </div>
                    %
                  </div>
                </div>
                <div className='skill-bar'>
                  <div className='bar-inner'>
                    <div
                      className='bar progress-line'
                      data-width='90'
                      style={{ width: '90%' }}
                    />
                  </div>
                </div>
              </div>
              <div className='skill-item mt-25'>
                <div className='skill-header'>
                  <h6 className='skill-title'>Javascript</h6>
                  <div className='skill-percentage'>
                    <div className='count-box counted'>
                      <span className='counter'>80</span>
                    </div>
                    %
                  </div>
                </div>
                <div className='skill-bar'>
                  <div className='bar-inner'>
                    <div
                      className='bar progress-line'
                      style={{ width: '80%' }}
                    />
                  </div>
                </div>
              </div>
              <div className='skill-item mt-25'>
                <div className='skill-header'>
                  <h6 className='skill-title'>Ruby</h6>
                  <div className='skill-percentage'>
                    <div className='count-box counted'>
                      <span className='counter'>70</span>
                    </div>
                    %
                  </div>
                </div>
                <div className='skill-bar'>
                  <div className='bar-inner'>
                    <div
                      className='bar progress-line '
                      style={{ width: '70%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
