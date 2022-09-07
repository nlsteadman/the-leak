import React, { useEffect, useContext } from 'react';
import leak from '../assets/leak.png';
import Map from './Map';
import { MyContext } from '../context/MyContext';


const Home = () => {
  const {locations} = useContext(MyContext);

  useEffect(() => {
    document.querySelector(".nav").hidden = false
  })

  const mapLocation = locations.map(location => location)

  return (
    <div>
      <div id="header">
        <div>
          <h1>The Leak </h1>
        </div>
        <div>
          <img src={leak} alt="logo" height="90px" width="90px" />
        </div>
      </div>
      <div id="home">
        <p id="home-line">
          Welcome to <em>the Leak</em>, a site addressing period poverty in Portland, Oregon.
        </p><br/>
        <ul id="home-list">
          <li>
            To find free or low cost period products, see the map below or the Locations page.
          </li>
          <li>
            To save locations near you, or locations that have the types of period products you need, click Signup to create an account.
          </li>
          <li>
            To see your account, click Login.
          </li>
          <li>
            For more information about period poverty and resources around the web, see the Resources page.
          </li>
        </ul>
      </div>
      <div id="instruction">
        <p>Hover over a marker and click the location name to learn more about each location</p>
      </div>
      <div id="maphome">
        <Map mapLocation={ mapLocation } />
      </div>
    </div>
  )
}

export default Home