import React from 'react';
import './Header.css';
import Slider from 'react-slick';
import MatchList from './MatchList'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-links">
          <a href="#">Matches(7)</a>
          <a href="#">The Ashes(1)</a>
          <a href="#">LPL</a>
          <a href="#">Global T20</a>
        </div>
        <div className="header-cards-container">
          <Slider infinite speed={500} slidesToShow={1} slidesToScroll={1}>
            <MatchList /> 
          </Slider>
        </div>
      </div>
    </header>
  );
};

export default Header;
