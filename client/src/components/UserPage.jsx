import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLocationCard from './UserLocationCard';
import UserReviewCard from './UserReviewCard';


const UserPage = ({ currentUser, reviews, locations, loggedIn, updateReview, deleteReview, locationTypes }) => {
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

  
  const myList = myReviews.map(review => <UserLocationCard key={ review.id } review={ review } loggedIn={ loggedIn } deleteReview={ deleteReview } locationTypes={ locationTypes } />)
  


  const reviewCards = () => {
    if (myReviews) {
      return myReviews.map(review => <UserReviewCard key={ review.id } review={ review } locations={ locations } updateReview={ updateReview } loggedIn={ loggedIn } />)
    }
  }

  return (
    <div>
      <div id="user-greeting">
        <div id="greeting">
          <h1>Hi, { currentUser.username }! Here are your saved locations.</h1>
        </div>
      </div>
      <div>
        { myList }
      </div>
      <div>
        <h1>Your Reviews:</h1>
        { reviewCards() }
      </div>
    </div>

  )
}

export default UserPage;