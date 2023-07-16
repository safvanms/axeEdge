import React, { useEffect, useState } from 'react'
import './header.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import Modal from 'react-modal';
import LOGO from '../../assets/axeEdge.png'




function Header() {
  const [open, setOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };



  return (
    <div>
      <div className={`header${isSticky ? ' sticky' : ''}`}>
        <div className="header__name">
          <img src={LOGO} alt="logo" />
        </div>
        <div className="header__options">
          <p>What do we do?</p>
          <p>Best offer leadings!</p>
          <p>About us</p>
          <button className="contact__button">Contact us</button>
        </div>

        <div className="header__hamburger" >
          {open ? 
          <MdClose size={25} onClick={closeModal}/> 
          : 
          <GiHamburgerMenu onClick={openModal}/>
          }
        </div>
      </div>
      <Modal isOpen={open} contentLabel="Mobile Header" className="mobile__header__modal">
        <div className="mobile__header__items" onClick={closeModal}>
          <p>What do we do?</p>
          <p>Best offer leadings!</p>
          <p>About us</p>
          <p>Contact us</p>
        </div>
      </Modal>
    </div>
  );
}

export default Header
