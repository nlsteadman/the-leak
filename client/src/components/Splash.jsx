import React, { useContext } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { MyContext } from '../context/MyContext';


const Splash = () => {
  const {loggedIn} = useContext(MyContext);

  useEffect(() => {
    if (loggedIn || !loggedIn) {
      document.querySelector(".nav").hidden = true
    }
  })

  return (
    <div id="splash">
      <div n="container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="border"></div>
        <div className="border"></div>
      </div>
      <svg>
        <defs>
          <filter id='goo'>
            <feGaussianBlur in='SourceGraphic'
            stdDeviation="10"/>
            <feColorMatrix in="name" mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 30 -15" />
            <feBlend in="SourceGraphic" /> 
          </filter>
        </defs>
      </svg>
      <div id="splashtitle">
        <ul>
          <li><Link to="/home">The Leak</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Splash;