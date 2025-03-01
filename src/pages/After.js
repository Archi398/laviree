import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import Carousel from '../components/organisms/Carousel';
import EmbedInsta from '../components/organisms/EmbedInsta';
import Portraits from '../components/organisms/Portraits';
import styles from '../styles/After.module.css';
import { artistesData } from '../data/artistesData';
import { afterData } from '../data/afterData';

export default function After() {
  const currentArtist = 'BTK';
  const afterBTK = afterData.find((after) => after.artist === currentArtist);
  console.log(afterBTK);
  const artistes = artistesData.filter((art) => art.group === currentArtist).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={styles.container}>
      <TitlePage label="L'AFTER * BTK" />
      <div className={styles.containerIntro}>
        <p className={styles.introText}>
        Comment ne pas se faire embarquer par la folie de ce collectif ? Composé de 8 DJ, l’énergie débordante et l'excentricité de la BTK Family s’exprime sur scène dans une diversité musicale couvrant un large spectre de la scène électronique. 

Une fois descendu de l’estrade, ne croyez pas que le show s’arrête ici. Pour eux la fête est une religion et si vous comptez les suivre, prévoyez vos meilleures lunettes de vitesse !

Originaires du milieu free party, ils évoluent aujourd’hui dans la scène parisienne en organisant des soirées qui font trembler la capitale. 
        </p>
        <img src={afterBTK.logo} alt="placeholder" className={styles.introImg} />
      </div>
      <div className={styles.containerCarrousel}>
        <Carousel key={currentArtist} imgs={afterBTK ? afterBTK.images : []} />
      </div>

      <div className={styles.containerInfos}>
        <div className={styles.containerInfosInside}>
          <TitlePage label="Les actualités" />
          <EmbedInsta idAccount="btk_house" />
        </div>
        <div className={styles.containerInfosInside}>
          <TitlePage label="Le festival" />
          <EmbedInsta idAccount="/ekotone_festival" />
        </div>
        <div className={styles.containerInfosInside}>
          <TitlePage label="Les évènements" />
          <EmbedInsta idAccount="primitivfr" />
        </div>
      </div>
      
      <TitlePage label="PORTRAITS (LIEN SUR SHOTGUN PRIMITIV)" />
      <Portraits portraits={artistes} />
    </div>
  );
}