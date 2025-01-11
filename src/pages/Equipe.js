import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import styles from '../styles/Equipe.module.css';
import { equipeData } from '../data/equipeData';

export default function Equipe() {
  const equipe = equipeData;

  return (
    <div className={styles.container}>
      <TitlePage label="l'équipe" />
      <div className={styles.containerImages}>
        {equipe.map((person, index) => (
          <div className={styles.containerImage} key={index}>
            <img src={person.image} alt={person.name} className={styles.img} />
            <p className={styles.text}>{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}