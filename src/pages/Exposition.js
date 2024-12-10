import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import styles from '../styles/Exposition.module.css';

export default function Exposition() {
  return (
    <div className={styles.container}>
      <TitlePage label="éxposition" />
    </div>
  );
}