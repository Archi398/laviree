import React from 'react';
import styles from '../../styles/InfoActu.module.css';

export default function InfoActuCard({ logo, title, text, infos }) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.containerLogo}>
        {logo}
      </div>
      <div className={styles.containerTitleText}>
        <div className={styles.containerTitle}>
          <h1>
            {title}
          </h1>
        </div>
        <div className={styles.containerText}>
          {text}
        </div>
      </div>
      <div className={styles.containerInfos}>
        {infos}
      </div>
    </div>
  );
}