import { useEffect } from 'react';
import TitlePage from '../components/atoms/TitlePage';
import Portraits from '../components/organisms/Portraits';
import styles from '../styles/Artistes.module.css';
import { artistesData } from '../data/artistesData';

export default function Artistes() {
  const artistes = artistesData.filter(artiste => artiste.type === 'musique').sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    document.title = 'LA VIRÉE | Artistes';
  }, []);

  return (
    <div className={styles.container}>
      <TitlePage label="NOS ARTISTES" />
      <Portraits portraits={artistes} />
    </div>
  );
}