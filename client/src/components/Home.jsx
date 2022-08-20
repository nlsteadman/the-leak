import React from 'react';
import leak from '../assets/leak.png';


const Home = () => {
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
      <div>
        <p>
          Welcome to the Leak.
        </p>
      </div>
    </div>
  )
}

export default Home