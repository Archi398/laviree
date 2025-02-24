import React, { useRef, useEffect, useState, useCallback } from 'react';
import styles from '../styles/Exposition.module.css';
import { artistesData } from '../data/artistesData';

export default function Exposition() {
  const artistes = artistesData.filter((art) => art.editions.includes(2025) && art.type === 'art');
  const pathRef = useRef(null);
  const circleRefs = useRef([]);
  const popupRef = useRef(null);
  const numCircles = 1; // artistes.length;
  const [popup, setPopup] = useState({ visible: false, x: 0, y: 0, index: null });
  const hideTimeoutRef = useRef(null);

  const calculatePopupPosition = (rect) => {
    const sidePosition = rect.left < window.innerWidth / 2 ? 'left' : 'right';
    const x = sidePosition === 'left' ? rect.left + rect.width / 2 : rect.right - rect.width / 2;
    const heightPosition = rect.top < window.innerHeight / 2 ? 'top' : 'bottom';
    const y = heightPosition === 'top' ? rect.top + rect.height / 2 : rect.bottom - rect.height / 2;

    return { x, y, sidePosition, heightPosition };
  };

  const handleShowPopup = useCallback((event, index) => {
    clearTimeout(hideTimeoutRef.current);
    const rect = event.target.getBoundingClientRect();
    const position = calculatePopupPosition(rect);
    setPopup({ visible: true, ...position, index });
  }, []);

  const handleHidePopup = useCallback(() => {
    hideTimeoutRef.current = setTimeout(() => {
      setPopup({ visible: false, x: 0, y: 0, index: null });
    }, 150);
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();
    const circleSpacing = length / (numCircles + 1);

    circleRefs.current.forEach((circleRef, index) => {
      if (circleRef) {
        const point = path.getPointAtLength(circleSpacing * (index + 1));
        circleRef.setAttribute('cx', point.x);
        circleRef.setAttribute('cy', point.y);
      }
    });
  }, [numCircles]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !circleRefs.current.some((circle) => circle && circle.contains(event.target))
      ) {
        setPopup({ visible: false, x: 0, y: 0, index: null });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 167" className={styles.svgPath}>
        <path
          ref={pathRef}
          fill="none"
          stroke="white"
          strokeWidth="2"
          d="M0 0C7.668 22.965 26.978-9.29 53.748 11.336c9.216 6.802 21.723-7.68 27.209 7.241 5.485 16.237 19.748 4.6813 26.55-3.73 14.263-17.116 16.457 4.608 11.41 17.773-8.777 18.871-43.227 6.802-75.329 38.186-17.194 18.149 20.056 28.472 47.274 8.775 15.36-11.629 19.09-.219 5.372 33.306-10.028 20.772 19.31 58.587 50.029-2.633 11.41-23.04-18.651-25.453-3.291-43.446 8.996-9.875 23.039 4.388 29.183-10.533 5.925-12.946-26.77-17.554 19.868-37.875 22.382-8.997 51.346 0 39.716 24.356-14.482 33.572 16.018 29.183-10.321 58.928-34.734 39.838 34.489 25.672 51.784 64.95"
        />
        {[...Array(numCircles)].map((_, index) => (
          <circle
            key={index}
            ref={(el) => (circleRefs.current[index] = el)}
            r="10"
            fill="#fc8bf2"
            className={styles.circle}
            onMouseEnter={(event) => handleShowPopup(event, index)}
            onMouseLeave={handleHidePopup}
          />
        ))}
      </svg>
      {popup.visible && (
        <div
          className={styles.popup}
          style={{
            left: popup.sidePosition === 'left' ? popup.x : 'auto',
            right: popup.sidePosition === 'right' ? window.innerWidth - popup.x : 'auto',
            top: popup.heightPosition === 'top' ? popup.y : 'auto',
            bottom: popup.heightPosition === 'bottom' ? window.innerHeight - popup.y : 'auto',
          }}
          ref={popupRef}
          onMouseEnter={() => clearTimeout(hideTimeoutRef.current)}
          onMouseLeave={handleHidePopup}
        >
          <h1>{artistes[popup.index]?.name ?? "À venir"}</h1>
          <p>{artistes[popup.index]?.description ?? 'À venir'}</p>
        </div>
      )}
    </div>
  );
}
