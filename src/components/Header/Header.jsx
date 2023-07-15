import React, { useState } from 'react'
import './header.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'

function Header() {
  const [open, setOpen] = useState(false)



  return (
    <div>
      <div className="header">
        <h2 className="header__name">axeEdge</h2>
        <div className="header__options">
          <p>What do we do ?</p>
          <p>Best offer leadings !</p>
          <p>About us</p>
          <button className="contact__button">Contact us</button>
        </div>

        <div className="header__hamburger" onClick={() => setOpen(!open)}>
          {open? <MdClose size={25} />
           : <GiHamburgerMenu />
           }
        </div>
      </div>
      <div className="mobile__header">
      {open && (
        <div className="mobile__header__items" onClick={() => setOpen(!open)}>
          <p>What do we do ?</p>
          <p>Best offer leadings !</p>
          <p>About us</p>
          <p>Contact us</p>
        </div>
      )}
      </div>
    </div>
  )
}

export default Header
