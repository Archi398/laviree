import React, { useState } from 'react';
import styles from '../../styles/Portraits.module.css';

const Portraits = ({ portraits }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setActiveIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveIndex(null);
    }
  };

  const handleClick = (index) => {
    if (isMobile) {
      setActiveIndex(index === activeIndex ? null : index);
    }
  };

  return (
    <div className={styles.containerPortraits}>
      {portraits.map((portrait, index) => (
        <div
          key={index}
          className={styles.portraitContainer}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={portrait.image} alt={`${index} - ${portrait.name}`} className={styles.portraitImg} />
          {activeIndex === index && (
            <div className={styles.legend}>
              <p>{portrait.name}</p>
              {/* <p>{portrait.genre}</p> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Portraits;