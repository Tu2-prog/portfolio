import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillBox({ title, data, description }) {
    return (
      <div className='grid-container'>
        <div className="skill-box">
          <h2>{title}</h2>
          <div className="skill-icons">
            {data.map((skill) => (
              <div className="skill-icon" key={skill.id}>
                <FontAwesomeIcon icon={skill.icon} size="3x" />
                <span>{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='text-box'>
          {description}
        </div>
      </div>
    );
}

export default SkillBox;
