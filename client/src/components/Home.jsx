import React, { useEffect } from 'react';
import leak from '../assets/leak.png';
import Map from './Map';


const Home = () => {

  useEffect(() => {
    document.querySelector(".nav").hidden = false
  })

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
        <p>
          Welcome to the Leak, a site addressing period poverty in Portland, Oregon.
        </p>
        <p>
          To find free or low cost period products, see the list and map below.
        </p>
        <p>
          To save locations near you, or locations that have the types of period products you need, click Signup to create an account.
        </p>
        <p>
          To see your account, click Login.
        </p>
      </div>
      <div id="maphome">
        <Map />
      </div>
    </div>
  )
}

export default Home