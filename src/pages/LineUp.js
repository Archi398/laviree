import React, { useEffect, useRef } from 'react';
import TitlePage from '../components/atoms/TitlePage';
import styles from '../styles/LineUp.module.css';

export default function LineUp() {
  const pathRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const paths = pathRefs.map(ref => ref.current);
    const pathLengths = paths.map(path => path.getTotalLength());

    paths.forEach((path, index) => {
      const length = pathLengths[index];
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect();
    });

    const handleScroll = () => {
      const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      paths.forEach((path, index) => {
        const length = pathLengths[index];
        const thresholds = [0, 0.22, 0.41, 0.76, 0.82, 0.87, 0.92];
        const threshold = thresholds[index];

        if (scrollPercentage >= threshold) {
          const adjustedScrollPercentage = (scrollPercentage - threshold) / (1 - threshold);
          const drawLength = length * adjustedScrollPercentage;
          path.style.strokeDashoffset = length - drawLength;

          if (scrollPercentage >= 0.99) {
            path.style.strokeDasharray = 'none';
          } else {
            path.style.strokeDasharray = `${length} ${length}`;
          }
        } else {
          path.style.strokeDashoffset = length;
        }
      });
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <TitlePage label="Line up" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" className={styles.svgPath}>
        <path ref={pathRefs[0]} fill="none" stroke="white" strokeWidth="2" d="M0 0S39.6 8.32 36.98 22.56Q33.34 28.58 46.52 55.4C52.52 69.6 67.5 49.16 69.6 70.16 70.3 78.7 89.62 64.42 92.42 71.7 94.8 64.56 105.58 71.84 114.26 70.3 125.18 67.08 125.74 59.8 135.12 67.64 140.02 71.14 141.56 65.26 144.92 72.68" />
        <path ref={pathRefs[1]} fill="none" stroke="white" strokeWidth="2" d="M36.98 22.56C68.2 12.76 61.06 44.68 92.14 51.4 111.46 54.62 107.54 41.6 119.02 34.32 134.28 23.96 121.12 13.46 128.68 7.3" />
        <path ref={pathRefs[2]} fill="none" stroke="white" strokeWidth="2" d="M64.98 31.38C66.94 13.74 80.52 25.64 85.84 11.92" />
        <path ref={pathRefs[3]} fill="none" stroke="white" strokeWidth="2" d="M76.6 20.04C76.18 32.92 90.74 23.54 92.7 28.3" />
        <path ref={pathRefs[4]} fill="none" stroke="white" strokeWidth="2" d="M118.74 34.46C126.72 39.5 153.46 27.6 145.06 46.22" />
        <path ref={pathRefs[5]} fill="none" stroke="white" strokeWidth="2" d="M124.9 64.98C118.46 59.38 129.66 57.84 125.6 50.28" />
        <path ref={pathRefs[6]} fill="none" stroke="white" strokeWidth="2" d="M92.421 71.701C95.475 77.964 86.321 81.741 92.201 89.921" />
      </svg>
    </div>
  );
}