import React from 'react';
import styles from '../../styles/PinkCard.module.css';

export default function PinkCard({ title, dates, artistes, style }) {
  const renderArtistsForDate = (date) => {
    const artistsForDate = artistes.filter((ar) => ar.date === date);
    return artistsForDate.map((ar) => `${ar.name}, ${ar.hour}`).join(' * ');
  };

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    const options = { weekday: 'long' };
    const dayName = new Intl.DateTimeFormat('fr-FR', options).format(date);
    return `${dayName} ${day}/${month}`;
  };

  return (
    <div className={styles.containerCard} style={style}>
      <div className={styles.containerTitle}>
        <h1>{title}</h1>
      </div>
      <div className={styles.containerText}>
        {dates.map((date, index) => (
          <div key={index}>
            <h2>{formatDate(date)}</h2>
            <p>{renderArtistsForDate(date)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}