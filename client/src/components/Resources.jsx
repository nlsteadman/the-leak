import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div>
      <h1 id="resource-title">Other Resources:</h1>
      <ul id="resource-links">
        <li><a href="https://www.211.org/" target="_blank">211</a></li>
        <li><a href="https://period.org/" target="_blank">period.org</a></li>
        <li><a href="https://foodfinder.oregonfoodbank.org/" target="_blank">oregonfoodbank.org</a></li>
        <li><a href="https://www.plannedparenthood.org/" target="_blank">plannedparenthood.org</a></li>
        <li><a href="https://www.freeclinics.com/" target="_blank">freeclinics.com</a></li>
      </ul>
    </div>
  )
}

export default Resources