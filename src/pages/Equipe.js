import React, { useState, useRef } from 'react';
import TitlePage from '../components/atoms/TitlePage';
import styles from '../styles/Equipe.module.css';
import { equipeData } from '../data/equipeData';

export default function Equipe() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const hidePopupTimeout = useRef(null);

  const handleMouseEnter = (person, event) => {
    if (hidePopupTimeout.current) {
      clearTimeout(hidePopupTimeout.current);
      hidePopupTimeout.current = null;
    }
    const rect = event.target.getBoundingClientRect();
    const top = rect.bottom + window.scrollY;
    const left = rect.right + window.scrollX;
    setPopupPosition({ top, left });
    setSelectedPerson(person);
  };

  const handleMouseLeave = () => {
    hidePopupTimeout.current = setTimeout(() => {
      setSelectedPerson(null);
    }, 200); // Adjust the delay as needed
  };

  return (
    <div className={styles.container}>
      <TitlePage label="l'équipe" />
      <div className={styles.containerImages}>
        {equipeData.map((person, index) => (
          <div
            className={styles.containerImage}
            key={index}
            onMouseEnter={(event) => handleMouseEnter(person, event)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={person.image} alt={person.name} className={styles.img} />
          </div>
        ))}
      </div>
      {selectedPerson && (
        <div
          className={styles.popup}
          style={{
            top: `${popupPosition.top}px`,
            left: `${popupPosition.left}px`,
            transform: 'translate(-50%, -100%)',
            position: 'absolute',
          }}
          onMouseEnter={() => {
            if (hidePopupTimeout.current) {
              clearTimeout(hidePopupTimeout.current);
              hidePopupTimeout.current = null;
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <h1>{selectedPerson.name}</h1>
          <p>{selectedPerson.job.join('\n')}</p>
        </div>
      )}
    </div>
  );
}