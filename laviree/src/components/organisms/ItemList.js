import React, { useState } from 'react';

const ItemList = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    { src: '/img/artists/1.png', link: ' https://www.instagram.com/laviree_festival/p/Cq8ojlTtYHV/?img_index=1' },
    { src: '/img/artists/2.png', link: 'https://www.instagram.com/laviree_festival/p/CtwhctVsJUE/?img_index=1' },
    { src: '/img/artists/3.png', link: 'https://www.instagram.com/laviree_festival/p/CtjDqg1NAUv/?img_index=1' },
    { src: '/img/artists/4.png', link: 'https://www.instagram.com/laviree_festival/p/CtcI3bztisp/?img_index=1' },
    { src: '/img/artists/5.png', link: 'https://www.instagram.com/laviree_festival/p/CtXCLg5N4wX/?img_index=1' },
    { src: '/img/artists/6.png', link: 'https://www.instagram.com/laviree_festival/p/CtKXJ5CrgbM/?img_index=1' },
    { src: '/img/artists/7.png', link: 'https://www.instagram.com/laviree_festival/p/CtFGQmiNIuC/?img_index=1' },
    { src: '/img/artists/8.png', link: 'https://www.instagram.com/laviree_festival/p/Ct1rfJFtmO0/?img_index=1' },
  ];
  const prev = (current - 1 + slides.length) % slides.length;
  const prevprev = (current - 2 + slides.length) % slides.length;
  const next = (current + 1) % slides.length;
  const nextnext = (current + 2) % slides.length;

  const gotoPrev = () => setCurrent(prev);
  const gotoNext = () => setCurrent(next);

  const handleSlideClick = (slide, index) => {
    if (index === current) {
      window.open(slide.link, '_blank');
    } else if (index === prev || index === prevprev) {
      gotoPrev();
    } else if (index === next || index === nextnext) {
      gotoNext();
    }
  };

  return (
    <div className="items">
      <h1 className='flex justify-center text-4xl font-bold' style={{ color: 'rgb(0, 255, 170)' }}>Artistes présent :</h1>
      <div>
        {slides.map((slide, index) => {
          const classNames = [
            'item',
            current === index && 'active',
            prev === index && 'prev',
            next === index && 'next',
            prevprev === index && 'prevprev',
            nextnext === index && 'nextnext'
          ].filter(Boolean).join(' ');

          return (
            <div
              key={index}
              className={classNames}
              onClick={() => handleSlideClick(slide, index)}
            >
              <img src={slide.src} alt={`Slide ${index}`} />
            </div>
          );
        })}
        <div className="arrow-left" onClick={gotoPrev}></div>
        <div className="arrow-right" onClick={gotoNext}></div>
      </div>
    </div>
  );
};

export default ItemList;
