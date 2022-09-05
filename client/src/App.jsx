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