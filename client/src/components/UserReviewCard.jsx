import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { headers, getToken } from './Globals';

const UserReviewCard = ({ review, locations, updateReview, loggedIn }) => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();


  const locationInfo = locations.find(location => location.id === review.location_id)

  const handleUpdate = () => {
    const params = {
      review: {
        content: ""
      }
    }
    
    if (loggedIn) {
      fetch("/reviews/" + review.id, {
        method: "PATCH",
        headers: {
          ...headers,
          ...getToken()
        },
        body: JSON.stringify(params)
      })
        .then(r => r.json())
        .then(data => {
          setContent(updateReview(data));
        })
    }
}

  const reviewContent = () => {
    if (review.content) {
      if (locationInfo) {
        return (
          <div id="review-card">
            <ul id="rainbow-ul">
              <li>{ review.content }</li>
              <p>- { locationInfo.name }</p>
              <button onClick={ () => navigate(`/reviews/update/${ review.id }`) }>Change Review</button>
              <button onClick={ handleUpdate } >Delete Review</button>
            </ul>
          </div>
        )
      }
    }
  }


  return (
    <div>
        { reviewContent() }
    </div>
  )
}

export default UserReviewCard