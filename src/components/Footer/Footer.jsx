import React from 'react'
import './Footer.css'
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer">
        {/* left side */}
        <div className="left__side__footer">
          <h3>Contact</h3>
          <p>
            E-mail :{' '}
            <a className='anchors' href="mailto:axeedgesolves@gmail.com"> 
              axeedgesolves@gmail.com
            </a>
          </p>

          <p>
            Phone : <span>+xx xxx xxx xxxx</span>
          </p>
        </div>

        {/* right side */}
        <div className="right__side__footer">
          <h3>Address</h3>
          <p>Temporary Address :</p>
          <p> axeEdge solution. Perinthalmanna ,</p>
          <p> Malappuram dt. Kerala , India</p>
          <p>ZIP : 679322</p>
        </div>

        <div className="footer__icons">
          <div className="icon__container">
            <BsWhatsapp size={20} />
          </div>
          <div className="icon__container">
            <BsInstagram size={20} />
          </div>
          <div className="icon__container">
            <BsFacebook size={20} />
          </div>
          <div className="icon__container">
            <BsLinkedin size={20} />
          </div>
        </div>
      </div>
      <div className="footer__end__section">
        <p>© 2023 axeEdge solution. All Right Reserved.</p>
      </div>
    </div>
  )
}
