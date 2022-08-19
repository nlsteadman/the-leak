import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LocationCard from './LocationCard';

const LocationList = ({ loggedIn, locations }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if( !loggedIn ) {
        navigate('/login');
    }
  }, [loggedIn, navigate])

  const locationCards = locations.map(location => <LocationCard key={ location.id } location={ location } />)



  return (
    <div id="location-list">
      <h1 id="locations">Locations</h1>
        { locationCards }
    </div>
  )
}

export default LocationList