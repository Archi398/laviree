import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import InfoActuCard from '../components/organisms/InfoActuCard';
import styles from '../styles/InfoActu.module.css';

export default function Actulites() {
  const cards = [
    {
      logo: (
        <img src="/images/infoActuLogo/soiree.png" alt="soirée logo" />
      ),
      title: 'Soirée inédite au Hasard Ludique',
      text: (
        <div>
          <p>
            Pour son grand retour La Virée organise une soirée au Hasard Ludique. Au programme concerts et dj set ! À ne pas manquer!
          </p>
          <h2>
            Prends tes billets
          </h2>
          <p>
            *PACK NOËL︲festival + soirée <br />
            *Soirée
          </p>
        </div>
      ),
      infos: (
        <div>
          <h1>
            Infos
          </h1>
          <p>
            Le 6 février 2025
          </p>
          <p>
            <strong>
            20h → 00h
            </strong>
          </p>
          <p>
          Le Hasard Ludique <br />
          128 Av. de Saint-Ouen, <br />
          75018 Paris
          </p>
        </div>
      )
    },
  ]



  return (
    <div className={styles.container}>
      <TitlePage label="Actualités" />
      {cards.map((card, index) => (
        <InfoActuCard
          key={index}
          logo={card.logo}
          title={card.title}
          text={card.text}
          infos={card.infos}
        />
      ))}
    </div>
  );
}