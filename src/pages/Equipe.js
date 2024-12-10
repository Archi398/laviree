import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import styles from '../styles/Equipe.module.css';

export default function Equipe() {
  return (
    <div className={styles.container}>
      <TitlePage label="l'équipe" />
    </div>
  );
}