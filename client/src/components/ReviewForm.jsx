import React, { useState, useContext } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { headers, getToken, baseUrl } from './Globals';
import { MyContext } from '../context/MyContext';


const ReviewForm = () => {
  const {loggedIn} = useContext(MyContext);
  const {updateReview} = useContext(MyContext);

  const [content, setContent] = useState("");
  const [review, setReview] = useState([]);
  const navigate = useNavigate();
  const id = useParams();

  useEffect(() => {
    if( !loggedIn ) {
        navigate('/login');
    }
  }, [loggedIn, navigate])

  useEffect(() => {
    fetch(baseUrl + "/reviews/" + id.id)
      .then(r => r.json())
      .then(review => setReview(review))
  }, []);

  useEffect(() => {
    if (review) {
      setContent(review.content)
    }
  }, [review])

  const handleSubmit = e => {
      e.preventDefault();
      const params = {
        review: {
          content: content
        }
      }
      
      if (loggedIn) {
        fetch("/reviews/" + id.id, {
          method: "PATCH",
          headers: {
            ...headers,
            ...getToken()
          },
          body: JSON.stringify(params)
        })
          .then(r => r.json())
          .then(data => {
            updateReview(data);
            navigate("/users/:id")
          })
      }
  }



  return (
    <div>
      <h1 id="review-form-title">Create/ Edit Review</h1>

      <form id="review-form" onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="content">Review: </label>
          <textarea type="text" name="content" id="content" cols="30" rows="5" value={ content } onChange={ e => setContent(e.target.value) } />
        </div><br/>
        <br />
        <input type="submit" value="Submit review" />
      </form><br/><br/>
    </div>
  )
}

export default ReviewForm;