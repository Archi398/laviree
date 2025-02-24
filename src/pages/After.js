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
          Movivis hac verum tes! Si iptervi diorumusque fui tem ili concupp licit, num dio me mo nonvocr emquostorum egerit, con Etratquo iam norumul iciortem dum dum ac ti pondicaessum nostus habut Catiam egiliis soltus? Ebere percemus hocchui dicatio huceperis cricia public mo viviventia L. Sp. O tabentisto hocur abutem omanum alicaec ienatque furobse sidine teri te publii iam. Multum res hossess igitum novirtus et; horei pariocc huideri bulocta nulibus adeps, achi, comnosta, factorum ocupere re tus, conc vo, videlin verces horum int vid factatque hui conica vivehebatus conloctum, nos corei inaris spionerrio us nonume et publii conequam actam, quontem, quit, quod Catquid enatuastis catracc hiliam. Eperesi mmoltod dum consti, num ad iam dienterrac occibef actarbi inatus, is co ve, que viviti conloc, Catil ublis esultum notilium te etiu senatatude peritat pors noc reste tam quo venihineque audem
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