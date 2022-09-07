import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div>
      <h1 id="resource-title">Other Resources:</h1>
      <ul id="resource-links">
        <li><a href="https://www.211.org/" target="_blank">211</a></li>
        <p>
          - There are more than 200 211 agencies across the United States, each with a team of compassionate, highly trained community specialists who are available to help you access the best local resources and services to address any need.
        </p>
        <p>
          Most calls, web chats, and text messages are from people looking for help meeting basic needs like housing, food, transportation, and health care. 
        </p>
        <li><a href="https://period.org/" target="_blank">period.org</a></li>
        <p>
          - PERIOD is a global, youth-powered non-profit that is fighting to end period poverty and period stigma through service, education, and advocacy.
        </p>
        <li><a href="https://foodfinder.oregonfoodbank.org/" target="_blank">oregonfoodbank.org</a></li>
        <p>
          - Oregon Food Bank fosters community connections to help people access nutritious food today, and we will build community power to eliminate the root causes of hunger, for good.
        </p>
        <li><a href="https://www.plannedparenthood.org/" target="_blank">plannedparenthood.org</a></li>
        <p>
          - Planned Parenthood delivers vital reproductive health care, sex education, and information to millions of people worldwide.
        </p>
        <li><a href="https://www.freeclinics.com/" target="_blank">freeclinics.com</a></li>
        <p>
          - Clinics listed on FreeClinics.com are offer services for free or at a reduced rate. Many clinics are operate under a sliding scale schedule. This means that costs to patients are calculated based on income.
        </p>
      </ul>
    </div>
  )
}

export default Resources