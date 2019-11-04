import React from 'react'

export default function Contact () {
  return (
    <section id='contact' className='contact-area pt-125 pb-130 gray-bg'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='section-title text-center pb-25'>
              <h2 className='title'>Get In Touch</h2>
              <p>
                If you are interested in my profile don't hesitate to leave me a
                message or contact me directly via...
              </p>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-6 col-sm-7'>
            <div className='contact-box text-center mt-30'>
              <div className='contact-icon'>
                <i className='lni-map-marker' />
              </div>
              <div className='contact-content'>
                <h6 className='contact-title'>Address</h6>
                <p>496/41/14 Duong Quang Ham, Ward 6, Go Vap District, HCMC</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-7'>
            <div className='contact-box text-center mt-30'>
              <div className='contact-icon'>
                <i className='lni-phone' />
              </div>
              <div className='contact-content'>
                <h6 className='contact-title'>Phone</h6>
                <br />
                <p>0346806070</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-7'>
            <div className='contact-box text-center mt-30'>
              <div className='contact-icon'>
                <i className='lni-envelope' />
              </div>
              <div className='contact-content'>
                <h6 className='contact-title'>Email</h6>
                <br />
                <p>thi131190@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='contact-form pt-30'>
              <form id='contact-form' action='#'>
                <div className='single-form'>
                  <input type='text' name='name' placeholder='Name' />
                </div>
                <div className='single-form'>
                  <input type='email' name='email' placeholder='Email' />
                </div>
                <div className='single-form'>
                  <textarea name='message' placeholder='Message' />
                </div>
                <p className='form-message' />
                <div className='single-form'>
                  <button className='main-btn' type='submit'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='contact-map mt-60'>
              <div className='gmap_canvas'>
                <iframe
                  id='gmap_canvas'
                  src='https://maps.google.com/maps?q=496%2F41%2F15%20duong%20quang%20ham&t=&z=13&ie=UTF8&iwloc=&output=embed'
                  frameBorder='0'
                  scrolling='no'
                  marginHeight='0'
                  marginWidth='0'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
