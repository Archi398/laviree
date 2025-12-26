import { useEffect } from 'react';
import TitlePage from '../components/atoms/TitlePage';
import PinkCard from '../components/organisms/PinkCard';
import styles from '../styles/CharteBienveillance.module.css';

export default function CharteBienveillance() {
  useEffect(() => {
    document.title = 'LA VIRÉE | Charte de Bienveillance';
  }, []);

  return (
    <div className={styles.container}>
      <TitlePage label="Charte de Bienveillance" />
      <PinkCard
        type="association"
        title="CHARTE DE BIENVEILLANCE"
        description=""
      />
    </div>
  );
}