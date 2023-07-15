import React, { useEffect, useState } from 'react'
import './intro.css'
import MAN from '../../assets/man.png'

const introHeads = [
  {
    top: 'Marketing Excellence ',
    middle: 'for',
    bottom: 'Lasting Impact',
    color: 'green',
  },
  {
    top: 'Strategic Marketing',
    middle: 'for',
    bottom: 'quick Growth',
    color: '#00FF00',
  },
  {
    top: 'Unlocking Potential , ',
    middle: 'effective',
    bottom: 'Marketing',
    color: 'Purple',
  },
  {
    top: 'Creating Opportunities,',
    middle: 'Driving',
    bottom: 'Growth',
    color: 'orange',
  },
  {
    top: 'Innovate, Inspire, Ignite:',
    middle: 'Marketing for',
    bottom: 'Growth',
    color: 'pink',
  },
  {
    top: 'Accelerating Growth through ',
    middle: 'Dynamic',
    bottom: 'Marketing',
    color: '#00FFFF',
  },
  {
    top: 'Embrace Creativity, ',
    middle: 'Embrace',
    bottom: 'Potential',
    color: '#00FF00',
  },
]

export default function Intro() {
  const [introHead, setIntroHead] = useState({})

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * introHeads.length)
    setIntroHead(introHeads[randomIndex])
  }, [])

  return (
    <div id="intro" className="intro__container">
      {introHead && (
        <>
          <div className="intro__heading1">
            <h1>{introHead.top}</h1>
          </div>
          <div className="intro__heading2">
            <h1>
              {introHead.middle}{' '}
              <span style={{ color: introHead.color }}>{introHead.bottom}</span>
              !
            </h1>
          </div>
        </>
      )}

      <div className="intro">


        {/* left section */}
        <div className="intro__left__section">
          
          <div className='intro__text'>
            <h2>People gather in their gadgets <span style={{color:"black"}}>nowadays!</span></h2>
          </div>

          <div className="man__img">
            <img src={MAN} alt="man" />
          </div>

        </div>


        {/* right section */}
        <div className="intro__right__section"></div>
      </div>
      <div className="sm__contact__area">
        <div>
          <span>Contact Us</span>
          <span></span>
        </div>
      </div>
    </div>
  )
}
