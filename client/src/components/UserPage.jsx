import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLocationCard from './UserLocationCard';
import UserReviewCard from './UserReviewCard';


const UserPage = ({ currentUser, reviews, locations, loggedIn, updateReview, deleteReview }) => {
  const navigate = useNavigate();
  const [myReviews, setMyReviews] = useState([]);
  
  
  useEffect(() => {
    if( !loggedIn ) {
        navigate('/login');
    }
  }, [loggedIn, navigate])

  useEffect(() => {
    if( loggedIn ) {
      if (reviews) {
        setMyReviews(reviews.filter(myReviews => myReviews.user_id === currentUser.id))
      }
    }
  }, [loggedIn, currentUser.id, reviews])

  
  const myList = myReviews.map(review => <UserLocationCard key={ review.id } review={ review } loggedIn={ loggedIn } updateReview={ updateReview } deleteReview={ deleteReview } />)
  


  const reviewCards = () => {
    if (myReviews) {
      return myReviews.map(review => <UserReviewCard key={ review.id } review={ review } locations={ locations } />)
    }
  }

  return (
    <div>
      <div id="user-greeting">
        <div id="user-greeting-image">
          <h1>*</h1>
        </div>
        <div id="greeting">
          <h2>Hi, { currentUser.username }!</h2>
        </div>
        <div id="user-greeting-image">
          <h1>*</h1>
        </div>
      </div>
      <div>
        { myList }
      </div>
      <div>
        { reviewCards() }
      </div>
    </div>

  )
}

export default UserPage;