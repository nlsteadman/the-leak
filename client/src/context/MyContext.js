import React, { useState, useEffect } from 'react';
import { headers, getToken, baseUrl } from '../components/Globals';

const MyContext = React.createContext();

const MyProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [locations, setLocations] = useState([]);
  const [locationTypes, setLocationTypes] = useState([]);
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  
  const loginUser = user => {
    if (user) {
      setCurrentUser(user);
      setLoggedIn(true);
    } else {
      setCurrentUser(null);
      setLoggedIn(false);
      alert("This user doesn't exist");
    }
  }

  const logoutUser = () => {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem('jwt');
  }  

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if(token && !loggedIn) {
      fetch(baseUrl + '/get-current-user', {
        method: "GET",
        headers: {
          ...headers,
          ...getToken()
        }
      })
        .then(r => r.json())
        .then(user => loginUser(user))
    }

    fetch(baseUrl + '/locations', {
      headers: {
        ...headers,
        ...getToken()
      }
    })
      .then(r => r.json())
      .then(data => setLocations(data))

      fetch(baseUrl + '/products', {
        headers: {
          ...headers,
          ...getToken()
        }
      })
        .then(r => r.json())
        .then(data => setProducts(data))
    

      fetch(baseUrl + '/reviews', {
        headers: {
            ...headers,
            ...getToken()
        }
      })
        .then(r => r.json())
        .then(data => setReviews(data))

      fetch(baseUrl + '/location_types', {
        headers: {
            ...headers,
            ...getToken()
        }
      })
        .then(r => r.json())
        .then(data => setLocationTypes(data))
    
  }, [loggedIn])

  const addToList = review => {
    setReviews([...reviews, review]);
  }

  const updateReview = review => {
    setReviews(reviews.map(r => r.id === review.id ? review : r))
  }

  const deleteReview = review => {
    setReviews(reviews.filter(r => r.id !== review.id))
  }


  return (
    <MyContext.Provider value={{
      currentUser,
      loggedIn,
      loginUser,
      logoutUser,
      locations,
      locationTypes,
      products,
      reviews,
      addToList,
      updateReview,
      deleteReview
    }}>
      { children }
    </MyContext.Provider>
  )
  
}



export { MyContext, MyProvider };