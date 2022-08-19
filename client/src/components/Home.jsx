import React from 'react';
import leak from '../assets/leak.png';


const Home = () => {
  return (
    <div>
      <div>
        <h1>The Leak</h1>
      </div>
      <div>
        <img src={leak} alt="logo" height="100px" width="100px" />
      </div>
    </div>
  )
}

export default Home