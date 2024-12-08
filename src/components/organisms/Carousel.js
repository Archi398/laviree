import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import styles from '../../styles/Carousel.module.css'; // Optional: your custom styles

const Carousel = ({ imgs }) => {
  return (
    <div className={styles.carouselContainer}>
      <ResponsiveCarousel
        showThumbs={false} // Disable small thumbnails below the carousel
        showStatus={false} // Disable the status (e.g., "1 of 3")
        showIndicators={false} // Disable the slide indicators
        infiniteLoop={true} // Enable infinite looping
        autoPlay={true} // Enable autoplay
        interval={5000} // Set autoplay interval (in milliseconds)
        transitionTime={500} // Set slide animation time
        centerSlidePercentage={100} // Set the width of the center slide
      >
        {imgs.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;
