import React from 'react'

export default function Footer () {
  const date = new Date()
  return (
    <footer id='footer' className='footer-area'>
      <div className='footer-widget pt-130 pb-130'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='footer-content text-center'>
                <a href='index.html'>
                  <img src='assets/images/Knight.png' alt='Logo' />
                </a>
                <p className='mt-'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor inci- didunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul>
                  <li>
                    <a href='https://www.facebook.com/nguyenanhthivn'>
                      <i className='lni-facebook-filled' />
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/thi131190'>
                      <i className='lni-github-original' />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/thi-nguyen-041735197/'>
                      <i className='lni-linkedin-original' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-copyright pb-20'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='copyright-text text-center pt-20'>
                <p>
                  Copyright © {date.getFullYear()}. Made with ❤️ by Thi -
                  Template Crafted by{' '}
                  <a href='https://uideck.com' rel='nofollow'>
                    UIdeck
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
