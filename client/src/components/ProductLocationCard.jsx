import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductLocationCard = ({ location }) => {
  const navigate = useNavigate();

// const authorInfo = authors.find(author => author.id === book.author_id)

  return (
    <div id="locationcard">
        <div id="locationimage">
            <img src={ location.image_url } alt="location" height="450" width="300" />
        </div>
        <div id="locationinfo">
            <p>{ location.address }</p>
            <p>{ location.hours }</p>
            <p>{ location.org }</p>
            <button onClick={ () => navigate(`/locations/${ location.id }`) }>Click for more</button>

        </div>
    </div>
  )
}

export default ProductLocationCard;