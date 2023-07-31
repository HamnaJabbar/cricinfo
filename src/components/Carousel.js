import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img1.jpeg'; 
import img2 from '../assets/img2.jpeg'; 
import img3 from '../assets/img3.jpeg'; 
import './Carousel.css'; // Import the carousel.css file

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={35000}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="Image 1" />
        </div>
        <div>
          <img src={img2} alt="Image 2" />
        </div>
        <div>
          <img src={img3} alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
