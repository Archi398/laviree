import { useEffect } from 'react';
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
  const artistes = artistesData.filter((art) => art.group === currentArtist).sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    document.title = 'LA VIRÉE | L\'after * BTK';
  }, []);

  return (
    <div className={styles.container}>
      <TitlePage label="L'AFTER * BTK" />
      <div className={styles.containerIntro}>
        <p className={styles.introText}>
          BTK, c'est le collectif explosif qui s'occupe de tout l'after de La Virée depuis 2021.
          <br /><br />
          BTK c'est <strong>une histoire d'amitié</strong> longue de <strong>plus de 10 années.</strong>
          <br /><br />
          Elle a commencé par une envie de <strong>liberté</strong>, celle de faire la fête où on le souhaite, quand on le souhaite. Dans cet élan fondateur, le collectif achète ses premiers caissons et se met à chercher un nom accrocheur.
          <br />
          <strong>La Bistoutek Family était née</strong>, un nom choisi comme un pied de nez aux nombreux soundsystems finissant par ”TEK”, témoin de <strong>l'esprit bon enfant</strong> véhiculé et de l'autodérision dont ils savent faire preuve.
          <br /><br />
          Avec une volonté de conserver <strong>un cadre intimiste</strong> au sein de leurs événements, ils cultivent à travers leur direction artistique un esprit de tolérance et de partage. Chaque artiste appartenant au crew se démarque par <strong>sa propre vision du mix</strong>. Et si vous n'êtes pas séduit par son style, vous ne serez jamais insensible à l'intention qu'il mettra dans chacune de ses performances !
          <br /><br />
          Aujourd'hui, la team s'est agrandie et compte <strong>une dizaine de membres</strong>. Leur activité principale s'exerce à travers leur association PRIMITIV avec laquelle ils organisent des évènements sur Paris et <strong>leur festival Ekotone dont la troisième édition a lieu du 29 au 31 mai 2026.</strong>
          <br /><br />
          Pour vous, ils <strong>remettent le maillot</strong> et comptent bien le mouiller pour vous faire vivre <strong>un after plus que torride !!</strong>
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