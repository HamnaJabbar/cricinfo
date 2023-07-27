
// import React from 'react';
// import './Header.css';
// import Slider from 'react-slick';

// import MegaMenu from './MegaMenu';
// import MatchList from './MatchList'; // Import the MatchList component

// const Header = () => {
//   const sliderSettings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1, // Display one card at a time in a single row
//     slidesToScroll: 1,
//   };

//   return (
//     <header className="header">
//       <div className="header-cards-container">
//         <Slider {...sliderSettings}>
//           <MatchList /> {/* Display the MatchList component within the slider */}
//         </Slider>
//       </div>
//       <MegaMenu /> {/* Render the MegaMenu component here */}
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import './Header.css';
// import MegaMenu from './MegaMenu'; // Import the MegaMenu component
// import Slider from 'react-slick';
// import MatchList from './MatchList'; // Import the MatchList component

// const Header = () => {
//   return (
//     <header className="header">
//       <MegaMenu /> {/* Display the MegaMenu component within the header */}
//       <div className="header-cards-container">
//         <Slider
//           infinite
//           speed={500}
//           slidesToShow={1} // Display 10 cards at a time in a single row
//           slidesToScroll={1}
//         >
//           <MatchList /> {/* Display the MatchList component within the slider */}
//         </Slider>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import './Header.css';
import Slider from 'react-slick';
import MatchList from './MatchList'; // Import the MatchList component
import MegaMenu from './MegaMenu'; // Import the MegaMenu component

const Header = () => {
  return (
    <header className="header">
      <div className="header-cards-container">
        <Slider
          infinite
          speed={500}
          slidesToShow={1} // Display 10 cards at a time in a single row
          slidesToScroll={1}
        >
          <MatchList /> {/* Display the MatchList component within the slider */}
        </Slider>
      </div>
      <MegaMenu /> {/* Display the MegaMenu component below the cards */}
    </header>
  );
};

export default Header;
