import React from 'react';
import ThreeDTitle from '../components/organisms/ThreeDTitle';
import styles from '../styles/Home.module.css';
import { editionsData } from '../data/editionsData';

export default function Home() {
  const edition = editionsData.find((ed) => ed.year === 2024);

  const renderDatesText = (dates) => {
    const formattedDates = dates.map((date) => {
      const [day] = date.split('/');
      return `${day}`;
    }).join('-');

    const [day, month, year] = dates[0].split('/');
    const dateObj = new Date(`${year}-${month}-${day}`);
    const monthName = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(dateObj).toUpperCase();

    return `${formattedDates} ${monthName} ${year}`;
  };
  const datesText = renderDatesText(edition.dates);

  return (
    <div className={styles.container}>
      <div className={styles.containerThreedtitle}>
        <ThreeDTitle />
      </div>
      <div className={styles.containerSlogan}>
        <span className={styles.slogan}>Il est temps de nous retrouver.</span>
      </div>
      <div className={styles.containerDates}>
        <span className={styles.dates}>{datesText}</span>
      </div>
    </div>
  );
}