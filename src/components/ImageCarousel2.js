import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img4 from '../assets/img4.webp'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const ImageCarousel2 = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      showThumbs={false}
    >
      <div>
        <img src={img4} alt="Image 4" />
      </div>
      <div>
        <img src={img4} alt="Image 5" />
      </div>
     
    </Carousel>
  );
};

export default ImageCarousel2;
