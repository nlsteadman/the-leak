import React from 'react';
import { Link } from 'react-router-dom';
import leak from '../assets/leak.png';


const Navbar = ({ loggedIn, logoutUser, currentUser }) => {
  const loggedOutLinks = () => {
    return (
        <div className="nav">
            <ul>
                <li><Link to="/home">The Leak<img src={leak} alt="logo" height="25px" width="25px" />
</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
        </div>
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
              <li><Link to="/users/:id">My page</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><a href=" " onClick={ handleLogout }>Logout</a></li>
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