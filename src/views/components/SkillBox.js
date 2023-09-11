import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillBox({ data }) {
    return (
      <div className='grid-container'>
        <div className="skill-box">
          <h2>Programming Skills</h2>
          <div className="skill-icons">
            {data.map((skill) => (
              <div className="skill-icon" key={skill.id}>
                <FontAwesomeIcon icon={skill.icon} size="3x" />
                <span>{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default SkillBox;
