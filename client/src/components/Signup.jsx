import React, { useState, useEffect, useContext } from 'react';
import { headers } from './Globals';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/MyContext';


const Signup = () => {
  const {loginUser} = useContext(MyContext);
  const {loggedIn} = useContext(MyContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
        navigate('/users/id')
    }
  }, [loggedIn])

  const handleSubmit = e => {
    e.preventDefault();

    const params = {
        user: {
            username,
            password
        }
    }

    fetch('/users', {
        method: "POST",
        headers,
        body: JSON.stringify(params)
    })
        .then(r => r.json())
        .then(data => {
            loginUser(data.user);
            localStorage.setItem('jwt', data.token)
            navigate('/users/:id');
        })
  }

  return (
    <div>
      <h1 id="signup-form-header">Create Account</h1>
        <form id="signup-form" onSubmit={ handleSubmit }>
          <div className="form">
            <div >
              <label htmlFor="username">Username: </label><br/>
              <input className="form-space" type="text" name="username" id="username" value={ username } onChange={ e => setUsername(e.target.value) }/>
            </div><br/>
            <div>
              <label htmlFor="password">Password: </label><br/>
              <input className="form-space" type="password" name="password" id="password" value={ password } onChange={ e => setPassword(e.target.value) }/>
            </div>
          </div>
          <br/>
          <br/>
          <input className="submit" type="submit" value="Create Account" />
        </form>
    </div>
  )
}

export default Signup