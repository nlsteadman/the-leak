import React, { useState, useContext } from 'react'
import LocationCard from './LocationCard';
import { MyContext } from '../context/MyContext';

const LocationList = () => {
  const {locations} = useContext(MyContext);

  const [locationType, setLocationType] = useState("All");
  
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