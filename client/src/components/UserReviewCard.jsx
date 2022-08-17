import React from 'react'

const UserReviewCard = ({ review, locations }) => {

  const locationInfo = locations.find(location => location.id === review.location_id)

  

  const reviewContent = () => {
    if (review.content) {
      if (locationInfo) {
        return (
          <div id="review-card">
            <ul id="rainbow-ul">
              <li>{ review.content }</li>
              <p>- { locationInfo.name }</p>
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