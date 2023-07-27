import React from 'react';
import './HeaderCard.css';

const HeaderCard = ({ match }) => {
  return (
    <div className="card">
      <h3>{match.team1} vs {match.team2}</h3>
      <p>Timings: {match.timings}</p>
      <p>Type: {match.type}</p>
    </div>
  );
};

export default HeaderCard;
