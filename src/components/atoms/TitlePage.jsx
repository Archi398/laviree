import React from 'react';
import styles from '../../styles/TitlePage.module.css';

const TitlePage = ({ label, subTitle }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{label}</h1>
      {subTitle && <h2 className={styles.subTitle}>{subTitle}</h2>}
    </div>
  );
};

export default TitlePage;