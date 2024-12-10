import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import Carousel from '../components/organisms/Carousel';
import PinkCard from '../components/organisms/PinkCard';
import styles from '../styles/Edition.module.css';
import { editionsData } from '../data/editionsData';

export default function Edition({ year }) {
  const edition = editionsData.find((ed) => ed.year === year);
  const imagesCarousel = edition ? edition.images : [];

  const renderSubTitle = (dates, place) => {
    const formattedDates = dates.map((date) => {
      const [day] = date.split('/');
      return `${day}`;
    }).join('-');

    const [day, month, year] = dates[0].split('/');
    const dateObj = new Date(`${year}-${month}-${day}`);
    const monthName = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(dateObj).toUpperCase();

    return `${formattedDates} ${monthName} ${year} - ${place}`;
  };
  const subTitle = edition ? renderSubTitle(edition.dates, edition.place) : '';

  return (
    <div className={styles.container}>
      <TitlePage label={`édition ${year}`} subTitle={subTitle} />
      <Carousel imgs={imagesCarousel} />
      <PinkCard
        title="Les artistes"
        dates={edition ? edition.dates : []}
        artistes={edition ? edition.artistes : []}
        style={{ marginTop: '50px' }}
      />
    </div>
  );
}