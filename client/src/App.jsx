import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import LocationList from "./components/LocationList";
import LocationDetail from "./components/LocationDetail";
import UserPage from "./components/UserPage";
import Product from "./components/Product";
import ReviewForm from "./components/ReviewForm";
import Resources from "./components/Resources";
import Splash from "./components/Splash";

const App = () => {
  // const [currentUser, setCurrentUser] = useState({});
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [locations, setLocations] = useState([]);
  // const [reviews, setReviews] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [locationTypes, setLocationTypes] = useState([]);


  // const loginUser = user => {
  //   if (user) {
  //     setCurrentUser(user);
  //     setLoggedIn(true);
  //   } else {
  //     setCurrentUser(null);
  //     setLoggedIn(false);
  //     alert("This user doesn't exist");
  //   }
  // }

  // const logoutUser = () => {
  //   setCurrentUser({});
  //   setLoggedIn(false);
  //   localStorage.removeItem('jwt');
  // }  

  // useEffect(() => {
  //   const token = localStorage.getItem('jwt')
  //   if(token && !loggedIn) {
  //     fetch('/get-current-user', {
  //       method: "GET",
  //       headers: {
  //         ...headers,
  //         ...getToken()
  //       }
  //     })
  //       .then(r => r.json())
  //       .then(user => loginUser(user))
  //   }

  //   fetch('/locations', {
  //     headers: {
  //       ...headers,
  //       ...getToken()
  //     }
  //   })
  //     .then(r => r.json())
  //     .then(data => setLocations(data))

  //   if(loggedIn) {
  //     fetch('/products', {
  //       headers: {
  //         ...headers,
  //         ...getToken()
  //       }
  //     })
  //       .then(r => r.json())
  //       .then(data => setProducts(data))
  //   }  

  //   if(loggedIn) {
  //     fetch('/reviews', {
  //       headers: {
  //           ...headers,
  //           ...getToken()
  //       }
  //     })
  //       .then(r => r.json())
  //       .then(data => setReviews(data))
  //   }

  //   if(loggedIn) {
  //     fetch('/location_types', {
  //       headers: {
  //           ...headers,
  //           ...getToken()
  //       }
  //     })
  //       .then(r => r.json())
  //       .then(data => setLocationTypes(data))
  //   }

  // }, [loggedIn])

  // const addToList = review => {
  //   setReviews([...reviews, review]);
  // }

  // const updateReview = review => {
  //   setReviews(reviews.map(r => r.id === review.id ? review : r))
  // }

  // const deleteReview = review => {
  //   setReviews(reviews.filter(r => r.id !== review.id))
  // }

  
  
  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route exact path="/" element={<Splash /> } />
        <Route path="/home" element={<Home /> } />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/locations" element={<LocationList />}/>
        <Route path="/locations/:id" element={<LocationDetail  />}/>
        <Route path="/users/:id" element={<UserPage  />}/>
        <Route path="/products/:id" element={<Product /> } />
        <Route path="/reviews/update/:id" element={<ReviewForm /> } />
        <Route path="/resources" element={<Resources /> } />
      </Routes>
    </Router>
  );
}

export default App;