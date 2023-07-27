import React, { useState } from 'react';
import './MegaMenu.css';

const MegaMenu = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality here (e.g., redirect to search results page)
    console.log('Search submitted:', searchText);
    setSearchText('');
  };

  return (
    <nav className="mega-menu">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="https://www.espncricinfo.com/cricket-videos">espnCricinfo</a>
        </li>
        <li className="menu-item">
          <a href="https://www.espncricinfo.com/live-cricket-score">Live Scores</a>
        </li>
        <li className="menu-item">
          <a href="https://www.espncricinfo.com/ci/content/match/fixtures_futures.html">Series</a>
        </li>
        <li className="menu-item">
          <a href="https://www.espncricinfo.com/team">Teams</a>
        </li>
        <li className="menu-item">
          <a href="https://www.espncricinfo.com/cricket-news">News</a>
        </li>
        <li className="menu-item">
          <a href="https://www.espncricinfo.com/cricket-features">Features</a>
        </li>
        <li className="menu-item">
          <a href="https://www.espncricinfo.com/cricket-videos">Videos</a>
        </li>
        <li className="menu-item">
          <a href="/stats">Stats</a>
        </li>
        <li className="menu-item search-icon">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Search"
            />
            <button type="submit">🔍</button>
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default MegaMenu;
