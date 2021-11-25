import React from 'react'
import './ExperienceCard.css'
export const ExperienceCard = (props) => {
    const {title , company , period , description} = props;
    return (
      <div className='exp-card'>
        <span className="icon">
          <i className="fas fa-briefcase"></i>
        </span>
        <span className="time-intv">{period}</span>
        <h5 className="job-ttl">{title}<span className="company">{company}</span> </h5>
        <p>{description}</p>
      </div>
    );
}
