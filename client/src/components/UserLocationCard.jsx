import React from 'react';
import { useNavigate } from 'react-router-dom';
import { headers, getToken } from './Globals';

const UserLocationCard = ({ loggedIn, deleteReview, review }) => {
  const navigate = useNavigate();

  // const authorInfo = authors.find(author => author.id === review.book.author_id)

  // const authorDisplay = () => {
  //   if (authorInfo) {
  //     return (
  //       <div>
  //         <p>Author: { authorInfo.name }</p>
  //       </div>
  //     )
  //   }
  // }
      
  // const handleDone = () => {
  //   const params = {
  //     review: {
  //       finished: true
  //     }
  //   }

  //   if (review) {
  //     if ( loggedIn ) {
  //       fetch("/reviews/" + review.id, {
  //         method: "PATCH",
  //         headers: {
  //           ...headers,
  //           ...getToken()
  //         },
  //         body: JSON.stringify(params)
  //       })
  //         .then(r => r.json())
  //         .then((data) => updateReview(data))
  //     }
  //   }
  // } 

  

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
  
  
  // const finishedButton = () => {
  //   if (review) {
  //     if (review.finished === false) {
  //       return (
  //         <div>
  //             <button onClick={ handleDone }>Finished reading</button>
  //         </div>
  //       )
  //     }
  //     if (review.finished === true) {
  //       return (
  //         null
  //       )
  //     }
  //   }
  // }

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
            {/* <div>{ authorDisplay() }</div> */}
            <br/>
            <p>{ review.location.name }</p>
            <p>{ review.location.address }</p>
            <p>{ review.location.hours }</p>
            <p>{ review.location.hours }</p>
            <button onClick={ () => navigate(`/locations/${ review.location.id }`) }>Click for more</button>
            <br/>
            <div>{ deleteButton() }</div>
            <button onClick={ () => navigate(`/reviews/update/${ review.id }`)}>Leave a review</button>
        </div>
      </div>
    </div>
  )
}

export default UserLocationCard;