import React, { useRef, useEffect, useState, useCallback } from 'react';
import styles from '../styles/Exposition.module.css';
import { editionsData } from '../data/editionsData';

export default function Exposition() {
  const edition = editionsData.find((ed) => ed.year === 2024);
  const pathRef = useRef(null);
  const svgContainerRef = useRef(null);
  const circleRefs = useRef([]);
  const popupRef = useRef(null);
  const numCircles = 10;
  const [popup, setPopup] = useState({ visible: false, x: 0, y: 0, index: null });

  const handleScroll = useCallback(() => {
    const path = pathRef.current;
    const svgContainer = svgContainerRef.current;
    const length = path.getTotalLength();
    const svgContainerHeight = svgContainer.getBoundingClientRect().height;
    const scrollY = window.scrollY - svgContainer.offsetTop;
    const scrollPercentage = Math.max(0, Math.min(scrollY / (svgContainerHeight - window.innerHeight), 1));

    const drawLength = length * scrollPercentage;
    path.style.strokeDashoffset = length - drawLength;

    if (scrollPercentage >= 0.99) {
      path.style.strokeDasharray = 'none';
    } else {
      path.style.strokeDasharray = `${length} ${length}`;
    }

    const visibilityThresholds = [0.088, 0.181, 0.273, 0.361, 0.456, 0.547, 0.634, 0.724, 0.815, 0.908];
    circleRefs.current.forEach((circleRef, index) => {
      if (circleRef) {
        const visibilityThreshold = visibilityThresholds[index];
        circleRef.classList.toggle(styles.visible, scrollPercentage >= visibilityThreshold);
      }
    });
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length} ${length}`;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();

    const circleSpacing = length / (numCircles + 1);
    circleRefs.current.forEach((circleRef, index) => {
      if (circleRef) {
        const point = path.getPointAtLength(circleSpacing * (index + 1));
        circleRef.setAttribute('cx', point.x);
        circleRef.setAttribute('cy', point.y);
      }
    });

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [handleScroll]);

  const handleCircleClick = useCallback((event, index) => {
    const rect = event.target.getBoundingClientRect();

    const checkSidePosition = rect.left < window.innerWidth / 2 ? 'left' : 'right';
    const checkXPosition = rect.left < window.innerWidth / 2 ? rect.left : rect.right;
    const xPosition = checkSidePosition === 'left' ? checkXPosition + rect.width / 2 : checkXPosition - rect.width / 2;

    const checkHeightPosition = rect.top < window.innerHeight / 2 ? 'top' : 'bottom';
    const checkYPosition = rect.top < window.innerHeight / 2 ? rect.top : rect.bottom;
    const yPosition = checkHeightPosition === 'top' ? checkYPosition + rect.height / 2 : checkYPosition - rect.height / 2;

    setPopup({ visible: true, x: xPosition, y: yPosition, index, sidePosition: checkSidePosition, heightPosition: checkHeightPosition });
  }, []);

  const handleClosePopup = useCallback(() => {
    setPopup({ visible: false, x: 0, y: 0, index: null, sidePosition: null });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClosePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClosePopup]);

  return (
    <div className={styles.container}>
      <div className={styles.svgContainer} ref={svgContainerRef}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 167" className={styles.svgPath}>
          <path ref={pathRef} fill="none" stroke="white" strokeWidth="2" d="M0 0C7.668 22.965 26.978-9.29 53.748 11.336c9.216 6.802 21.723-7.68 27.209 7.241 5.485 16.237 19.748 4.6813 26.55-3.73 14.263-17.116 16.457 4.608 11.41 17.773-8.777 18.871-43.227 6.802-75.329 38.186-17.194 18.149 20.056 28.472 47.274 8.775 15.36-11.629 19.09-.219 5.372 33.306-10.028 20.772 19.31 58.587 50.029-2.633 11.41-23.04-18.651-25.453-3.291-43.446 8.996-9.875 23.039 4.388 29.183-10.533 5.925-12.946-26.77-17.554 19.868-37.875 22.382-8.997 51.346 0 39.716 24.356-14.482 33.572 16.018 29.183-10.321 58.928-34.734 39.838 34.489 25.672 51.784 64.95" />
          {[...Array(numCircles)].map((_, index) => (
            <circle
              key={index}
              ref={el => circleRefs.current[index] = el}
              r="10"
              fill="#c38fbe"
              className={styles.circle}
              onClick={(event) => handleCircleClick(event, index)}
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
          >
            <h1>{edition.exposition?.artistes[popup.index]?.name}</h1>
            <p>{edition.exposition?.artistes[popup.index]?.description}</p>
            {/* <button onClick={handleClosePopup}>Close</button> */}
          </div>
        )}
      </div>
    </div>
  );
}