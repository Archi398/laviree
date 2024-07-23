import React, { useState } from 'react';

const ItemList = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    { src: '/img/artists/1.png', link: 'https://www.instagram.com/laviree_festival/p/Ct1rfJFtmO0/?img_index=1' },
    { src: '/img/artists/2.png', link: 'https://www.instagram.com/laviree_festival/p/CtwhctVsJUE/?img_index=1' },
    { src: '/img/artists/3.png', link: 'https://www.instagram.com/laviree_festival/p/CtjDqg1NAUv/?img_index=1' },
    { src: '/img/artists/4.png', link: 'https://www.instagram.com/laviree_festival/p/CtcI3bztisp/?img_index=1' },
    { src: '/img/artists/5.png', link: 'https://www.instagram.com/laviree_festival/p/CtXCLg5N4wX/?img_index=1' },
    { src: '/img/artists/6.png', link: 'https://www.instagram.com/laviree_festival/p/CtKXJ5CrgbM/?img_index=1' },
    { src: '/img/artists/7.png', link: 'https://www.instagram.com/laviree_festival/p/CtFGQmiNIuC/?img_index=1' },
  ];
  const prev = current > 0 ? current - 1 : slides.length - 1;
  const next = current < slides.length - 1 ? current + 1 : 0;

  const gotoPrev = () => setCurrent(prev);
  const gotoNext = () => setCurrent(next);

  const handleSlideClick = (slide, index) => {
    if (index === current) {
      window.open(slide.link, '_blank');
    } else if (index === prev) {
      gotoPrev();
    } else if (index === next) {
      gotoNext();
    }
  };

  return (
    <div className="items">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`item ${current === index ? 'active' : ''} ${prev === index ? 'prev' : ''} ${next === index ? 'next' : ''}`}
          onClick={() => handleSlideClick(slide, index)}
        >
          <img src={slide.src} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
