import React, { useEffect, useState } from 'react'
import './header.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import Modal from 'react-modal'
import LOGO from '../../assets/axeEdge.png'
import { Link } from 'react-scroll'

function Header() {
  const [open, setOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <div>
      <div className={`header${isSticky ? ' sticky' : ''}`}>
        <div className="header__name">
          <img src={LOGO} alt="logo" />
        </div>
        <div className="header__options">
          <Link to="works" smooth={true} spy={true}>
            What do we do?
          </Link>
          <Link to="contact" smooth={true} spy={true}>
            Best offer leadings!
            </Link>
          <Link to="footer" smooth={true} spy={true}>
            About us
            </Link>
         <Link to="contact" smooth={true} spy={true}> <button className="contact__button">Contact us</button></Link>
        </div>

        <div className="header__hamburger">
          {open ? (
            <MdClose size={25} onClick={closeModal} />
          ) : (
            <GiHamburgerMenu onClick={openModal} />
          )}
        </div>
      </div>
      <Modal
        isOpen={open}
        contentLabel="Mobile Header"
        className="mobile__header__modal"
      >
        <div className="mobile__header__items" >
          <p><Link to='works' smooth={true} spy={true} onClick={closeModal} > What do we do? </Link></p>
          <p><Link to='contact' smooth={true} spy={true} onClick={closeModal}> Best offer leadings! </Link></p>
          <p><Link to='footer' smooth={true} spy={true} onClick={closeModal}> About us </Link></p>
          <p><Link to='contact' smooth={true} spy={true} onClick={closeModal}> Contact us </Link></p>
        </div>
      </Modal>
    </div>
  )
}

export default Header
