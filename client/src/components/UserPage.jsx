import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLocationCard from './UserLocationCard';
import UserReviewCard from './UserReviewCard';
import { MyContext } from '../context/MyContext';


const UserPage = () => {
  const {currentUser} = useContext(MyContext);
  const {reviews} = useContext(MyContext);
  const {locations} = useContext(MyContext);
  const {loggedIn} = useContext(MyContext);
  const {updateReview} = useContext(MyContext);
  const {deleteReview} = useContext(MyContext);
  const {locationTypes} = useContext(MyContext);


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
          <h1>Hi, { currentUser.username }! Here are your saved locations</h1>
        </div>
      </div>
      <br/>
      <div>
        { myList }
      </div>
      <div id="reviews">
        <h1>Your Reviews:</h1>
        { reviewCards() }
      </div>
    </div>

  )
}

export default UserPage;