import React, { useEffect, useState } from 'react'
import './intro.css'
import MAN from '../../assets/man.png'
import PEOPLE from '../../assets/people.png'

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
  const [flipped, setFlipped] = useState({})

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * introHeads.length)
    setIntroHead(introHeads[randomIndex])
  }, [])

  const flipItem = () => {
    setFlipped(!flipped)
  }

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
          <div className="intro__text">
            <h2>
              People gather on their gadgets{' '}
              <span style={{ color: 'black' }}>nowadays!</span>
            </h2>
          </div>
          <div className="man__img">
            <img src={MAN} alt="man" />
          </div>
        </div>

        {/* right section */}

        <div
          className={`intro__right__section ${flipped ? 'flipped' : ''}`}
          onClick={flipItem}
        >
          {!flipped ? (
            <div className="intro__carousal">
              <h3>Empower Your Brand <span style={{color:"red"}}>Online</span> </h3>
              <img src={PEOPLE} alt="people" className="carousal__img" />
              <h3>Reach Your Audience, Digitally Amplified</h3>
              <div className="loading__dotes">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : (
            <div className="intro__carousal">
              <h4>Act Now !</h4>
              <h2>Transform Your Enterprise with Exceptional Advertising</h2>
              <h3>At the right Time .!</h3>
              <h5>Simplify Data Maintenance with Ease .</h5>
              <div className="loading__dotes">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>
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
