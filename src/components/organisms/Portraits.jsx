import React, { useState, useEffect } from 'react';
import styles from '../../styles/Portraits.module.css';

const Portraits = ({ portraits }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

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
          <img
            src={portrait.image}
            alt={portrait.name}
            className={styles.portraitImg}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                `data:image/svg+xml;utf8,\
                <svg xmlns='http://www.w3.org/2000/svg' width='150' height='150'>\
                  <rect width='100%' height='100%' fill='%234b5563'/>\
                  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af'>${portrait.name}</text>\
                </svg>`;
            }}
          />
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