import React from 'react';
import './AdditionalCards.css';
import img7 from '../assets/img7.webp';
import img10 from '../assets/img10.webp';
import img11 from '../assets/img11.jpeg';
import img12 from '../assets/img12.webp';
const AdditionalCards = () => {
  return (
    <div className="additional-cards-container">
      <div className="card-container">
        <div className="card">
          <h3></h3>
          <img src={img7} alt="Question Icon" className="card8" /> {/* Image added */}
          <p>What is the highest score by an India opener on debut in men's Tests?</p>
          <a href="https://www.espncricinfo.com/ask" className="ask-question-button">
            <span className="search-icon">🔍</span> Ask a question
          </a>
        </div>
        
        <div className="card2">
  <h3 className="card-heading">West Indies vs India</h3>
  <p>2nd Men'sODI BridgeTown</p>
  <p className="india-info">🇮🇳 India</p>
  <p className="bangal-info"><strong>🇧🇪 West Indies</strong></p>
  <p>West-Indies won by 6 wickets</p>
</div>



        <div className="card">
          <h3>News Headlines</h3>
          <ul className="arrow-links">
            <li><a href="https://www.espncricinfo.com/story/stuart-broad-to-retire-from-cricket-at-end-of-oval-test-1390059">Broad to retire after Ashes Series</a></li>
            <li><a href="https://www.espncricinfo.com/story/rahul-dravid-on-india-s-loss-in-2nd-odi-vs-wi-cant-worry-about-every-single-game-1390129">Dravid not worried about ODI loss</a></li>
            <li><a href="https://www.espncricinfo.com/story/india-batter-ajinkya-rahane-pulls-out-of-leicestershire-stint-plans-to-take-a-short-break-from-cricket-1390037">Men's T20 world cuo set from August 4-20</a></li>
            <li><a href="https://www.espncricinfo.com/story/next-men-s-t20-world-cup-set-to-be-played-from-june-4-to-30-2024-1389921">Ashes was Smith run out or not?</a></li>
            <li><a href="https://www.espncricinfo.com/live-blog/the-buzz-sediqullah-atal-smashes-seven-sixes-in-an-over-1389124">Buzz: Atal's 7 sixes in 60 runs</a></li>
            
          </ul>
        </div>
        <div className="card4">
          <h3>Key Series</h3>
          <ul className="vertical-links">
            <li><a href="https://www.espncricinfo.com/series/asia-cup-2023-1388374">Asia Cup 2023</a></li>
            <li><a href="https://www.espncricinfo.com/series/india-in-west-indies-2023-1381201">West Indies vs India</a></li>
            <li><a href="https://www.espncricinfo.com/series/the-ashes-2023-1336037">The Ashes</a></li>
            <li><a href="https://www.espncricinfo.com/series/australia-women-in-ireland-2023-1378184">Ireland vs Australia</a></li>
            <li><a href="https://www.espncricinfo.com/series/australia-women-in-ireland-2023-1378184">Global T20 Canada</a></li>
            <li><a href="https://www.espncricinfo.com/series/global-t20-canada-2023-1387246">MLC 2023</a></li>
            <li><a href="https://www.espncricinfo.com/series/the-hundred-women-s-competition-2023-1355568">Country Div1</a></li>
            <li><a href="https://www.espncricinfo.com/series/the-hundred-men-s-competition-2023-1355567">Country Div2</a></li>
            <li><a href="https://www.espncricinfo.com/series/icc-cricket-world-cup-2023-24-1367856">WorldCup 2023</a></li>
          </ul>
        </div>
        <div className="card5">
          <h3></h3>
          
        </div>
        <div className="card6">
  <h3></h3>
  <div className="image-container">
    <img src={img10} alt="Image 1" className="card6-image" />
    <img src={img11} alt="Image 2" className="card6-image" />
  </div>
  
</div>

      </div>
    </div>
  );
};

export default AdditionalCards;
