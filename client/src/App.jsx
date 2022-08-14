import { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { headers, getToken } from "./components/Globals";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import LocationList from "./components/LocationList";
import LocationDetail from "./components/LocationDetail";
import UserPage from "./components/UserPage";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [locations, setLocations] = useState([]);
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
      fetch('/get-current-user', {
        method: "GET",
        headers: {
          ...headers,
          ...getToken()
        }
      })
        .then(r => r.json())
        .then(user => loginUser(user))
    }

    fetch('/locations', {
      headers: {
        ...headers,
        ...getToken()
      }
    })
      .then(r => r.json())
      .then(data => setLocations(data))

    if(loggedIn) {
      fetch('/reviews', {
        headers: {
            ...headers,
            ...getToken()
        }
      })
        .then(r => r.json())
        .then(data => setReviews(data))
    }

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
    <Router>
      <Navbar loggedIn={ loggedIn } logoutUser={ logoutUser } currentUser={ currentUser } />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/signup" element={<Signup loginUser={ loginUser } loggedIn={ loggedIn } />}/>
          <Route path="/login" element={<Login loginUser={ loginUser } loggedIn={ loggedIn } />}/>
          <Route path="/locations" element={<LocationList loggedIn={ loggedIn } locations={ locations } />}/>
          <Route path="/locations/:id" element={<LocationDetail loggedIn={ loggedIn } locations={ locations } reviews={ reviews } currentUser={ currentUser } addToList={ addToList } />}/>
          <Route path="/users/:id" element={<UserPage loggedIn={ loggedIn } locations={ locations } reviews={ reviews } currentUser={ currentUser } updateReview={ updateReview } deleteReview={ deleteReview } />}/>
        </Routes>
    </Router>
  );
}

export default App;