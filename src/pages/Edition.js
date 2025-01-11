import React, { useState, useEffect } from 'react';
import TitlePage from '../components/atoms/TitlePage';
import Carousel from '../components/organisms/Carousel';
import PinkCard from '../components/organisms/PinkCard';
import styles from '../styles/Edition.module.css';
import { editionsData } from '../data/editionsData';
import { artistesData } from '../data/artistesData';

export default function Edition({ year }) {
  const edition = editionsData.find((ed) => ed.year === year);
  const artistes = artistesData.filter((art) => art.editions.includes(year));

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/images?year=${year}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const imagePaths = data.map((fileName) => `/images/editions/${year}/${fileName}`);
        setImages(imagePaths);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, [year]);

  return (
    <div className={styles.container}>
      <TitlePage label={`édition ${year}`} subTitle={subTitle} />
      {!loading && <Carousel imgs={images} />}
      <PinkCard
        type={'edition'}
        title="Les artistes"
        edition={edition ? edition : []}
        artistes={artistes ? artistes : []}
        style={{ marginTop: '50px' }}
      />
    </div>
  );
}