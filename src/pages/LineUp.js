import React, { useEffect, useRef } from 'react';
import PinkCard from '../components/organisms/PinkCard';
import styles from '../styles/LineUp.module.css';
import { editionsData } from '../data/editionsData';
import { artistesData } from '../data/artistesData';

export default function LineUp() {
  const edition = editionsData.find((ed) => ed.year === 2025);
  const artistes = artistesData.filter((art) => art.editions.includes(2025));

  const pathRefs = useRef([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]);
  const textRefs = useRef([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]);
  const rectRefs = useRef([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]);
  const allContainerRef = useRef(null);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const paths = pathRefs.current.map(ref => ref.current);
    const pathLengths = paths.map(path => path.getTotalLength());

    paths.forEach((path, index) => {
      const length = pathLengths[index];
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect();
    });

    const handleScroll = () => {
      const allContainer = allContainerRef.current;
      const allContainerHeight = allContainer.getBoundingClientRect().height;
      const cardContainer = cardContainerRef.current;
      const cardContainerHeight = cardContainer.getBoundingClientRect().height;
      const heightNeeded = allContainerHeight - cardContainerHeight;
      const scrollY = window.scrollY - allContainer.offsetTop;
      const scrollPercentage = Math.max(0, Math.min(scrollY / (heightNeeded - window.innerHeight), 1));

      paths.forEach((path, index) => {
        const length = pathLengths[index];
        const thresholds = [0, 0.23, 0.41, 0.76, 0.82, 0.87, 0.92];
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

      const visibilityThresholds = [0.13, 0.28, 0.39, 0.55, 0.99, 0.49, 0.95, 0.89, 0.91, 0.97, 0.93];
      textRefs.current.forEach((textRef, index) => {
        const rectRef = rectRefs.current[index];
        const visibilityThreshold = visibilityThresholds[index];
        if (scrollPercentage >= visibilityThreshold) {
          rectRef.current.style.visibility = 'visible';
          textRef.current.style.visibility = 'visible';
        } else {
          rectRef.current.style.visibility = 'hidden';
          textRef.current.style.visibility = 'hidden';
        }
      });
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);

    setTimeout(() => {
      textRefs.current.forEach((textRef, index) => {
        const rectRef = rectRefs.current[index];
        const textBBox = textRef.current.getBBox();
        rectRef.current.setAttribute('x', textBBox.x);
        rectRef.current.setAttribute('y', textBBox.y);
        rectRef.current.setAttribute('width', textBBox.width);
        rectRef.current.setAttribute('height', textBBox.height);
      });
    }, 0);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.allContainer} ref={allContainerRef}>
        <div className={styles.svgContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 90" className={styles.svgPath}>
            <path ref={pathRefs.current[0]} fill="none" stroke="white" strokeWidth="2" d="M0 0S39.6 8.32 36.98 22.56Q33.34 28.58 46.52 55.4C52.52 69.6 67.5 49.16 69.6 70.16 70.3 78.7 89.62 64.42 92.42 71.7 94.8 64.56 105.58 71.84 114.26 70.3 125.18 67.08 125.74 59.8 135.12 67.64 140.02 71.14 144.798 65.184 144.07 74.245" />
            <rect ref={rectRefs.current[0]} fill="black" style={{ visibility: 'hidden' }} />
            <text ref={textRefs.current[0]} x="14" y="10" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }}>
              artiste 1
            </text>
            <rect ref={rectRefs.current[1]} fill="black" style={{ visibility: 'hidden' }} />
            <text ref={textRefs.current[1]} x="18" y="35" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }}>
              artiste 2
            </text>
            <rect ref={rectRefs.current[2]} fill="black" style={{ visibility: 'hidden' }} />
            <text ref={textRefs.current[2]} x="16" y="55" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }}>
              artiste 3
            </text>
            <rect ref={rectRefs.current[3]} fill="black" style={{ visibility: 'hidden' }} />
            <text ref={textRefs.current[3]} x="40" y="70" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }}>
              artiste 4
            </text>
            <rect ref={rectRefs.current[4]} fill="black" style={{ visibility: 'hidden' }} />
            <text ref={textRefs.current[4]} x="113" y="80" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }}>
              artiste 5
            </text>
            <path ref={pathRefs.current[1]} fill="none" stroke="white" strokeWidth="2" d="M36.98 22.56C68.2 12.76 61.06 44.68 92.14 51.4 111.46 54.62 107.54 41.6 119.02 34.32 134.28 23.96 121.12 13.46 128.68 7.3" />
            <rect ref={rectRefs.current[5]} fill="black" style={{ visibility: 'hidden' }} />
            <text ref={textRefs.current[5]} x="60" y="42" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }}>
              artiste 6
            </text>
            <rect ref={rectRefs.current[6]} fill="black" style={{ visibility: 'hidden' }} />
            <text ref={textRefs.current[6]} x="110" y="10" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }}>
              artiste 7
            </text>

            <path ref={pathRefs.current[2]} fill="none" stroke="white" strokeWidth="2" d="M64.98 31.38C66.94 13.74 80.52 25.64 85.84 11.92" />
            <rect ref={rectRefs.current[7]} fill="black" style={{ visibility: 'hidden' }} />
            <text ref={textRefs.current[7]} x="60" y="10" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }}>
              artiste 8
            </text>

            <path ref={pathRefs.current[3]} fill="none" stroke="white" strokeWidth="2" d="M76.6 20.04C76.18 32.92 90.265 16.072 91.803 26.671" />
            <rect ref={rectRefs.current[8]} fill="black" style={{ visibility: 'hidden' }} />
            <text ref={textRefs.current[8]} x="83" y="30" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }}>
              artiste 9
            </text>

            <path ref={pathRefs.current[4]} fill="none" stroke="white" strokeWidth="2" d="M118.74 34.46C126.72 39.5 153.46 27.6 145.06 46.22" />
            <rect ref={rectRefs.current[9]} fill="black" style={{ visibility: 'hidden' }} />
            <text ref={textRefs.current[9]} x="120" y="50" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }}>
              art 10
            </text>

            <path ref={pathRefs.current[5]} fill="none" stroke="white" strokeWidth="2" d="M124.9 64.98C121.577 59.52 131.044 51.348 118.422 56.122" />
            <rect ref={rectRefs.current[10]} fill="black" style={{ visibility: 'hidden' }} />
            <text ref={textRefs.current[10]} x="85" y="60" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }}>
              artiste 11
            </text>

            <path ref={pathRefs.current[6]} fill="none" stroke="white" strokeWidth="2" d="M92.421 71.701C93.683 86.599 74.593 74.969 75 90" />

          </svg>
        
        <div className={styles.cardContainer} ref={cardContainerRef}>
          <PinkCard
            type="lineUp"
            title="Line up"
            edition={edition ? edition : []}
            artistes={artistes ? artistes : []}
          />
        </div>
        </div>
      </div>
    </div>
  );
}