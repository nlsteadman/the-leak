import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { headers, getToken } from './Globals';
import { MyContext } from '../context/MyContext';

const UserLocationCard = ({ review }) => {
  const {loggedIn} = useContext(MyContext);
  const {deleteReview} = useContext(MyContext);
  const {locationTypes} = useContext(MyContext);

  const navigate = useNavigate();

  const locationTypeInfo = locationTypes.find(locationType => locationType.id === review.location.location_type_id)

  const locationTypeDisplay = () => {
    if (locationTypeInfo) {
      return (
        <div>
          <p>Location type: { locationTypeInfo.org }</p>
        </div>
      )
    }
  }

  const handleDelete = () => {
    if (review) {
      if ( loggedIn ) {
        fetch("/reviews/" + review.id, {
          method: "DELETE",
          headers: {
            ...headers,
            ...getToken()
          }
        })
          .then((data) => deleteReview(review))
      }
    }
  }


  const deleteButton = () => {
    if (review) {
        return (
          <div>
            <button onClick={ handleDelete }>Remove from list</button>
          </div>
        )
    }
  }

  
  return (
    <div>
      <div id="locationcard">
        <div id="locationimage">
            <img src={ review.location.image_url } alt="book cover" height="550" width="375" />
        </div>
        <div id="locationinfo">
          <h2>{ review.location.name }</h2>
          <p>{ review.location.address }</p>
          <p>{ review.location.hours }</p>
          { locationTypeDisplay() }
          <button onClick={ () => navigate(`/locations/${ review.location.id }`) }>Click for more</button>
          <div>{ deleteButton() }</div>
          <button onClick={ () => navigate(`/reviews/update/${ review.id }`)}>Leave a review</button>
        </div>
      </div>
    </div>
  )
}

export default UserLocationCard;