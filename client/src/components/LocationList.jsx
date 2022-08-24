import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LocationCard from './LocationCard';

const LocationList = ({ loggedIn, locations }) => {
  const [locationType, setLocationType] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   if( !loggedIn ) {
  //       navigate('/login');
  //   }
  // }, [loggedIn, navigate])

  const handleChange = (e) => {
    setLocationType(e.target.value)
  }
  
  const filteredLocations = locations.filter(location => {
    if (location.location_type) {
      if (locationType === "All") {
        return location
      }
      if (location.location_type.org === locationType) {
        return location
      }
    }
  })

  const locationCards = filteredLocations.map(location => <LocationCard key={ location.id } location={ location } />)
  
  
  return (
    <div>
      <div>
        <h1 id="locations">Locations</h1>
      </div>
      <div id="menu">
        <label htmlFor="locations">Location type: </label>
        <select name="locations" id="select" onChange={ handleChange }>
          <option value="All">All</option>
          <option value="Food bank">Food Bank</option>
          <option value="Planned Parenthood">Planned Parenthood</option>
          <option value="Free clinic">Free Clinics</option>
        </select>
      </div>
        <br/>
        <br/>
        <br/>
      <div>
          { locationCards }
      </div>
    </div>
  )
}

export default LocationList