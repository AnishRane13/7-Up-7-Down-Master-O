import React from 'react';
import './Dice.css';

const Dice = ({ value }) => {
  const faceDots = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8],
  };

  return (
    <div className="dice animate-roll">
      {Array(9).fill().map((_, i) => (
        <span key={i} className={`dot ${faceDots[value].includes(i) ? 'show' : ''}`}></span>
      ))}
    </div>
  );
};

export default Dice;
