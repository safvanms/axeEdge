import React from 'react'
import './works.css'
import WEB_IMG1 from '../../assets/webDesign_img.png'
import WEB_DEV from '../../assets/webDev.png'
import ANDROID from '../../assets/android.png'
import APPLE from '../../assets/apple.png'
import SERVICE from '../../assets/service.png'
import DATABASE from '../../assets/database.png'



export default function Works() {
  return (
    <div id="works" className="works">
      <div>
        <h1 className="works__heading">
          we <span>Do</span>
        </h1>
        <p className="works__details">
          Experience the power of our software company's comprehensive solutions
          encompassing captivating web design, seamless website development,
          cutting-edge Android-iOS app development, and efficient company data
          management.
        </p>
      </div>
      <div className="works__section">
        <div className="work__cards">
          <img src={WEB_IMG1} alt="webDesign" className='work_img web1' />
          <h2>Web Design</h2>
        </div>
        <div className="work__cards">
        <img src={WEB_DEV} alt="webDev" className='work_img web2' />
          <h2>Web Development</h2>
        </div>
        <div className="work__cards">
        <img src={ANDROID} alt="webDev" className='work_img' />
          <h2>Android Application</h2>
        </div>
        <div className="work__cards">
        <img src={APPLE} alt="webDev" className='work_img apple' />
          <h2>IOS Application</h2>
        </div>
        <div className="work__cards">
        <img src={SERVICE} alt="webDev" className='work_img ' />
          <h2>Web services</h2>
        </div>
        <div className="work__cards">
        <img src={DATABASE} alt="webDev" className='work_img ' />
          <h2>Data Management</h2>
        </div>
      </div>
    </div>
  )
}
