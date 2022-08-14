import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar