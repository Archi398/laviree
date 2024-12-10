import React, { useState } from 'react';
import styles from '../../styles/Portraits.module.css';

const Portraits = ({ portraits }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.containerPortraits}>
      {portraits.map((portrait, index) => (
        <div key={index} className={styles.portraitContainer} onClick={() => handleClick(index)}>
          <img src={portrait.src} alt={`placeholder ${index}`} className={styles.portraitImg} />
          {activeIndex === index && (
            <div className={styles.legend}>
              <p>{portrait.legend}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Portraits;
