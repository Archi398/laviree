import React, { useState } from 'react';
import styles from '../../styles/Portraits.module.css';

const Portraits = ({ portraits }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className={styles.containerPortraits}>
      {portraits.map((portrait, index) => (
        <div
          key={index}
          className={styles.portraitContainer}
          onClick={() => setActiveIndex(index === activeIndex ? null : index)}
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