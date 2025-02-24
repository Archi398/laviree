import React, { useEffect, useRef } from 'react';
import PinkCard from '../components/organisms/PinkCard';
import styles from '../styles/LineUp.module.css';
import { editionsData } from '../data/editionsData';
import { artistesData } from '../data/artistesData';

export default function LineUp() {
  const edition = editionsData.find((ed) => ed.year === 2025);
  const artistes = artistesData.filter((art) => art.editions.includes(2025));
  const nb_artistes = artistes.length; // 17 max

  const pathRefs = useRef([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]);
  const textRefs = useRef(Array(nb_artistes).fill().map(() => React.createRef()));
  const rectRefs = useRef(Array(nb_artistes).fill().map(() => React.createRef()));
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
        const thresholds = [0, 0.23, 0.41, 0.76, 0.82, 0.87, 0.92, 0.93];
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

      const visibilityThresholds = [0.13, 0.28, 0.39, 0.55, 0.99, 0.49, 0.55, 0.82, 0.92, 0.97, 0.93, 0.86, 0.94, 0.90, 0.98, 0.98, 0.98];
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
        rectRef.current.setAttribute('x', textBBox.x - 1);
        rectRef.current.setAttribute('y', textBBox.y - 1);
        rectRef.current.setAttribute('width', textBBox.width + 2);
        rectRef.current.setAttribute('height', textBBox.height + 2);
      });
    }, 0);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.allContainer} ref={allContainerRef}>
        <div className={styles.allContainerSticky}>

          <div className={styles.svgContainer}>
            <div className={styles.svgPath}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 90" >
                <path ref={pathRefs.current[0]} fill="none" strokeLinejoin="round" stroke="white" strokeWidth="2" d="M0 0S25.562-2.212 28.491 20.309Q30.902 51.082 46.52 55.4C54.753 58.86 65.512 51.989 67.846 65.989 70.3 78.7 89.62 64.42 92.42 71.7 94.8 64.56 105.58 71.84 112.307 69.232 120.862 66.121 120.473 60.029 135.251 66.38 145.362 70.399 147.436 58.732 154.436 63.918" />
                <path ref={pathRefs.current[1]} fill="none" strokeLinejoin="round" stroke="white" strokeWidth="2" d="M28.438 20.234C60.845.401 54.105 43.955 78.087 45.122 96.364 43.825 91.05 32.289 106.994 29.567 113.216 26.715 111.66 13.104 133.178 18.16" />
                <path ref={pathRefs.current[2]} fill="none" strokeLinejoin="round" stroke="white" strokeWidth="2" d="M56.567 25.289C61.104 10.642 79.252 22.308 86.511 9.475" />
                <path ref={pathRefs.current[3]} fill="none" strokeLinejoin="round" stroke="white" strokeWidth="2" d="M68.623 16.864C79.122 29.697 80.548 15.567 91.048 24.252" />
                <path ref={pathRefs.current[4]} fill="none" strokeLinejoin="round" stroke="white" strokeWidth="2" d="M94.938 36.437C106.605 46.937 111.79 36.048 118.531 40.326S130.586 25.678 141.734 37.215" />
                <path ref={pathRefs.current[5]} fill="none" strokeLinejoin="round" stroke="white" strokeWidth="2" d="M103.363 69.232C106.733 55.751 118.918 63.01 124.233 52.77" />
                <path ref={pathRefs.current[6]} fill="none" strokeLinejoin="round" stroke="white" strokeWidth="2" d="M117.363 66.64C118.4 76.232 129.289 69.362 135.122 79.214" />
                <path ref={pathRefs.current[7]} fill="none" strokeLinejoin="round" stroke="white" strokeWidth="2" d="M92.421 71.701C93.901 78.952 86.771 73.508 92.121 93.07" />

                <rect ref={rectRefs.current[0]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[0]} x="14" y="10" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[0]?.link, '_blank')}>
                  {artistes[0]?.name}
                </text>
                <rect ref={rectRefs.current[1]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[1]} x="18" y="35" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[1]?.link, '_blank')}>
                  {artistes[1]?.name}
                </text>
                <rect ref={rectRefs.current[2]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[2]} x="26" y="51" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[2]?.link, '_blank')}>
                  {artistes[2]?.name}
                </text>
                <rect ref={rectRefs.current[3]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[3]} x="58" y="66" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[3]?.link, '_blank')}>
                  {artistes[3]?.name}
                </text>
                <rect ref={rectRefs.current[4]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[4]} x="145" y="65" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[4]?.link, '_blank')}>
                  {artistes[4]?.name}
                </text>
                <rect ref={rectRefs.current[5]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[5]} x="48" y="28" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[5]?.link, '_blank')}>
                  {artistes[5]?.name}
                </text>
                <rect ref={rectRefs.current[6]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[6]} x="70" y="47" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[6]?.link, '_blank')}>
                  {artistes[6]?.name}
                </text>
                <rect ref={rectRefs.current[7]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[7]} x="108" y="26" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[7]?.link, '_blank')}>
                  {artistes[7]?.name}
                </text>
                <rect ref={rectRefs.current[8]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[8]} x="135" y="20" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[8]?.link, '_blank')}>
                  {artistes[8]?.name}
                </text>
                <rect ref={rectRefs.current[9]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[9]} x="80" y="26" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[9]?.link, '_blank')}>
                  {artistes[9]?.name}
                </text>
                <rect ref={rectRefs.current[10]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[10]} x="78" y="10" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[10]?.link, '_blank')}>
                  {artistes[10]?.name}
                </text>
                <rect ref={rectRefs.current[11]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[11]} x="109" y="41" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[11]?.link, '_blank')}>
                  {artistes[11]?.name}
                </text>
                <rect ref={rectRefs.current[12]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[12]} x="140" y="38" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[12]?.link, '_blank')}>
                  {artistes[12]?.name}
                </text>
                <rect ref={rectRefs.current[13]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[13]} x="90" y="62" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[13]?.link, '_blank')}>
                  {artistes[13]?.name}
                </text>
                <rect ref={rectRefs.current[14]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[14]} x="110" y="52" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[14]?.link, '_blank')}>
                  {artistes[14]?.name}
                </text>
                <rect ref={rectRefs.current[15]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[15]} x="130" y="81" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[15]?.link, '_blank')}>
                  {artistes[15]?.name}
                </text>
                <rect ref={rectRefs.current[16]} fill="black" style={{ visibility: 'hidden' }} />
                <text ref={textRefs.current[16]} x="83" y="79" fill="white" className={styles.svgText} style={{ visibility: 'hidden' }} onClick={() => window.open(artistes[16]?.link, '_blank')}>
                  {artistes[16]?.name}
                </text>

              </svg>
            </div>
          </div>
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