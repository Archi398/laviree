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
        BTK c'est une histoire d'amitié longue de 10 années aujourd'hui. Elle a commencé par une envie de liberté, celle de faire la fête où on le souhaite, quand on le souhaite. Dans cet élan fondateur, le collectif achète ses premiers caissons et se met à chercher un nom accrocheur. 

La Bistoutek Family était née, un nom choisi comme un pied de nez aux nombreux soundsystems finissant par ”TEK”, témoin de l’esprit bon enfant véhiculé et de l'auto dérision dont ils savent faire preuve.

Avec une volonté de conserver un cadre intimiste au sein de leurs événements, ils cultivent à travers leur direction artistique un esprit de tolérance et de partage. 

Chaque artiste appartenant au crew se démarque par sa propre vision du mix. Et si vous n'êtes pas séduit par son style, vous ne serez jamais insensible à l'intention qu'il mettra dans chacune de ses performances.

Aujourd’hui, la team s'est agrandie et compte une dizaine de membres. Leur activité principale s’exerce à travers leur association PRIMITIV avec laquelle ils organisent des évènements sur Paris et leur festival Ekotone dont la deuxième édition aura lieu du 23 au 25 mai prochain.

Pour vous, ils remettent le maillot et comptent bien le mouiller pour vous faire vivre un after plus que torride !!
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