


import React from 'react';
import './MatchList.css';

const MatchList = () => {
  const matches = [
    { date: "2023-07-26", team1: "India", team2: "England", timings: "10:00 AM", type: "T20" },
    { date: "2023-07-27", team1: "Australia", team2: "New Zealand", timings: "2:30 PM", type: "T20" },
    { date: "2023-08-02", team1: "Pakistan", team2: "England", timings: "10:00 AM", type: "T20" },
    { date: "2023-08-05", team1: "Australia", team2: "Afghanistan", timings: "2:30 PM", type: "T20" },
    { date: "2023-08-05", team1: "India", team2: "Sirilanka", timings: "11:00 AM", type: "T20" },
    { date: "2023-08-31", team1: "Australia", team2: "Australia", timings: "5:30 PM", type: "T20" },
    { date: "2023-09-01", team1: "India", team2: "England", timings: "10:00 AM", type: "T20" },
    { date: "2023-09-02", team1: "Sirilanka", team2: "New Zealand", timings: "6:30 PM", type: "T20" },
  ];

  return (
    <div className="match-list">
      {matches.map((match, index) => (
        <div key={index} className="match-item">
          <h3>{match.team1} vs {match.team2}</h3>
          <p>Date: {match.date}</p>
          <p>Timings: {match.timings}</p>
          <p>Type: {match.type}</p>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
