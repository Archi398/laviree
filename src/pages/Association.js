import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import styles from '../styles/Association.module.css';

export default function Association() {
  return (
    <div className={styles.container}>
      <TitlePage label="l'association" />
    </div>
  );
}