import React from 'react';
import './MatchList.css';

const MatchList = () => {
  const matches = [
   
    { team1: "🇦🇺 Australia .", team2: "🇧🇩 Bangladesh", desc: "Bangladesh choose to field", score: "154/16.1",score2: ""},
    {  team1: "🇿🇼 Zimbabawae", team2: "🇦🇫 Afghanistan",desc: "Afghanistan won by 6 wickets", score: "154/20",score2: "155/19.1"},
    {  team1: "🇵🇰 Pakistan", team2: "🇧🇩 Bangladesh" ,desc: "Pakistan won by 3 wickets", score: "181/20",score2: "143/20"},
    {  team1: "🇮🇳 India", team2: "🇦🇫 Afghanistan",desc: "India won by 4 wickets", score: "190/20",score2: "160/20"},
    { team1: "🇮🇳 India", team2: "🇵🇰 Pakistan",desc: "Pakistan won by 2 wickets", score: "186/20",score2: "187/19.4"},
    {  team1: "🇿🇼 Zimbabawe", team2: "🇦🇺 Australia",desc: "Match postponed due to rain", score: ""},
    {  team1: "🇮🇳 India", team2: "🇧🇩 Bangladesh",desc: "5-08-2023", score: ""},
    {  team1: "🇵🇰 Pakistan", team2: "🇦🇫 Afghanistan" ,desc: "8-08-2023", score: ""},
  ];
  
  return (
    <div className="match-list">
      {matches.map((match, index) => (
        <div key={index} className="match-item">
          <p>{match.team1} </p> 
          <p>{match.team2} </p>
          <p>{match.desc} </p>
          <p>{match.score}</p>
           <p>{match.score2}</p>
           <div className="link-container">
            <a href="https://www.espncricinfo.com/series/global-t20-canada-2023-1387246/match-schedule-fixtures-and-results">Schedule</a>
            <a href="https://www.espncricinfo.com/series/the-ashes-2023-1336037/england-vs-australia-5th-test-1336047/match-report">Table</a>
            <a href="https://www.espncricinfo.com/series/lanka-premier-league-2023-1382875">Series</a>
          </div>
        </div>
      ))}
    </div>
  );
};




export default MatchList;
