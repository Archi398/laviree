import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../../styles/Carousel.module.css';

const Carousel = ({ imgs }) => {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true, // Enable center mode
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true, // Enable variable width
    centerPadding: '0', // Adjust the padding to avoid empty space
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {imgs.map((img, index) => (
          <div className={styles.imagesContainer} key={index}>
            <img className={styles.images} src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;