import React from 'react'
import { useNavigate } from 'react-router-dom'

const LocationCard = ({ location }) => {
    const navigate = useNavigate();

  return (
    <div id="locationcard">
        <div id="locationimage">
            <img src={ location.image_url } alt="location" height="450" width="300" />
        </div>
        <div id="locationinfo">
            <p>{ location.name }</p>
            <p>{ location.address }</p>
            <button onClick={ () => navigate(`/locations/${ location.id }`) }>Click for more</button>
        </div>
    </div>
  )
}

export default LocationCard;