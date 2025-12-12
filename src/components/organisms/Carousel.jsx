import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../../styles/Carousel.module.css';

const Carousel = ({ imgs }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const preloadImages = async () => {
      const promises = imgs.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        if (isMounted) setLoaded(true);
      } catch (e) {
        console.error('Error loading images', e);
        if (isMounted) setLoaded(true); // still show carousel
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, [imgs]);

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    centerPadding: '0',
  };

  if (!loaded) {
    return (
      <div className={styles.loader}>
        Chargement des images...
      </div>
    );
  }

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {imgs.map((img, index) => (
          <div className={styles.imagesContainer} key={index}>
            <img
              className={styles.images}
              src={img}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;