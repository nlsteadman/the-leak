import React, { useState, useEffect } from 'react';

const ReviewContext = React.createContext();

const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {

  }, [])


  return (
    <ReviewContext.Provider value={{
      reviews: reviews
    }}>
      { children }
    </ReviewContext.Provider>
  )
  
}

export { ReviewContext, ReviewProvider };