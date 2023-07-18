import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef()

  const [done, setDone] = useState(false)
  const [clicked, setClicked] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setClicked(true)
    console.log('object')
    emailjs
      .sendForm(
        'service_v1qjsmk',
        'template_hkhomfp',
        form.current,
        'HTj2-kCnETDzzVUII',
      )
      .then(
        (result) => {
          setDone(true)
          e.target.reset()
          setClicked(false)
        },
        (error) => {
          console.error(error)
        },
      )
  }

  return (
    <div className="contact-form" id="contact">
        <div className="contact-head">
          <h1>Get in touch</h1>
          <span>Contact <span className='span'>us</span></span>
        </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user-name"
            className="user"
            placeholder="Your Name"
            required
          />
          <input
            type="tel"
            name="number"
            className="user"
            placeholder="Your Number"
            required
          />
          <input
            type="email"
            name="user-email"
            className="user"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message..."
            required
          />

          {!clicked ? (
            <input type="submit" value="Send" className="button" />
          ) : (
            <button className="button_clicked"> Sending...</button>
          )}

          {done && (
            <div style={{ fontSize: '15px', textAlign: 'center' }}>
              {' '}
              Thanks for contacting us , we'll contact you later. 😊
            </div>
          )}

          <div
            className="blur c-blur1"
            style={{ background: 'var(--purple)' }}
          ></div>
        </form>
      </div>
    </div>
  )
}
