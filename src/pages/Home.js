import React from 'react';
import ThreeDTitle from '../components/organisms/ThreeDTitle';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.containerThreedtitle}>
        <ThreeDTitle />
      </div>
    </div>
  );
}