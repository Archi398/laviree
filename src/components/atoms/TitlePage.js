import React from 'react';
import styles from '../../styles/TitlePage.module.css';

const TitlePage = ({ label }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{label}</h1>
    </div>
  );
};

export default TitlePage;