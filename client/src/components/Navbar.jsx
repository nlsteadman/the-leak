import React from 'react';
import { Link } from 'react-router-dom';
import leak from '../assets/leak.png';


const Navbar = ({ loggedIn, logoutUser, currentUser }) => {
  const loggedOutLinks = () => {
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/home">The Leak<img src={leak} alt="logo" height="25px" width="25px" />
                  </Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
        </nav>
    )
}

const handleLogout = e => {
    e.preventDefault();
    logoutUser();
}

const loggedInLinks = () => {
    return (
        <div className="nav">
            <ul>
              <li><Link to="/home">The Leak<img src={leak} alt="logo" height="25px" width="25px" />
                </Link></li>
              <li><Link to="/users/:id">My Page</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><a href=" " onClick={ handleLogout }>Log Out</a></li>
              <br/>
              <li id="currentUser">Welcome back, { currentUser.username }!</li>
            </ul>
        </div>
    )
}

return (
    <div>
        { loggedIn ? loggedInLinks() : loggedOutLinks() }
    </div>
)
}

export default Navbar;