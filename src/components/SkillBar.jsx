import React, { useState, useEffect } from 'react';

const SkillBar = ({ name, percentage, color, onHover, onLeave }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(100), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="skill-segment"
      style={{ width: `${percentage}%` }}
      onMouseEnter={() => onHover(name)}
      onMouseLeave={onLeave}
    >
      <div 
        className="skill-level" 
        style={{ width: `${width}%`, backgroundColor: color }}
      >
        <div className="skill-info">
          <span className="skill-name">{name}</span>
          <span className="skill-percentage">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
