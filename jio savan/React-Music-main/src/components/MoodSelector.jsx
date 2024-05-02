import React from 'react';
import './MoodSelector.css';

const MoodSelector = ({ onMoodChange }) => {
  return (
    <div className="mood-selector">
      <button onClick={() => onMoodChange('calm')}>Calm</button>
      <button onClick={() => onMoodChange('energetic')}>Energetic</button>
      <button onClick={() => onMoodChange('happy')}>Happy</button>
      <button onClick={() => onMoodChange('sad')}>Sad</button>
    </div>
  );
};

export default MoodSelector;