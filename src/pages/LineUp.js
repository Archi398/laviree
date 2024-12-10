import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import styles from '../styles/LineUp.module.css';

export default function LineUp() {
  return (
    <div className={styles.container}>
      <TitlePage label="Line up" />
    </div>
  );
}