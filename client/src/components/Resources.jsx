import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div>
      Other Resources:
      <ul>
        <li><Link to="https://www.211.org/">211</Link></li>
        <li><Link to="https://period.org/">period.org</Link></li>
        <li><Link to="https://foodfinder.oregonfoodbank.org/">oregonfoodbank.org</Link></li>
        <li><Link to="https://www.plannedparenthood.org/">plannedparenthood.org</Link></li>
        <li><Link to="https://www.freeclinics.com/">freeclinics.com</Link></li>
      </ul>
    </div>
  )
}

export default Resources