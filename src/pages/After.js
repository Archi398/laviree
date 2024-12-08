import React, { useState } from 'react';
import TitlePage from '../components/atoms/TitlePage';
import Carousel from '../components/organisms/Carousel';
import styles from '../styles/After.module.css';

export default function After() {
  const imagesCarousel = [
    'https://via.placeholder.com/600x400?text=Slide+1',
    'https://via.placeholder.com/600x400?text=Slide+2',
    'https://via.placeholder.com/600x400?text=Slide+3',
  ];

  const imagesPortraits = [
    'https://via.placeholder.com/150?text=Portrait+1',
    'https://via.placeholder.com/150?text=Portrait+2',
    'https://via.placeholder.com/150?text=Portrait+3',
    'https://via.placeholder.com/150?text=Portrait+4',
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.container}>
      <TitlePage label="L'AFTER * BTK" />
      <div className={styles.containerIntro}>
        <p className={styles.introText}>
          Movivis hac verum tes! Si iptervi diorumusque fui tem ili concupp licit, num dio me mo nonvocr emquostorum egerit, con Etratquo iam norumul iciortem dum dum ac ti pondicaessum nostus habut Catiam egiliis soltus? Ebere percemus hocchui dicatio huceperis cricia public mo viviventia L. Sp. O tabentisto hocur abutem omanum alicaec ienatque furobse sidine teri te publii iam. Multum res hossess igitum novirtus et; horei pariocc huideri bulocta nulibus adeps, achi, comnosta, factorum ocupere re tus, conc vo, videlin verces horum int vid factatque hui conica vivehebatus conloctum, nos corei inaris spionerrio us nonume et publii conequam actam, quontem, quit, quod Catquid enatuastis catracc hiliam. Eperesi mmoltod dum consti, num ad iam dienterrac occibef actarbi inatus, is co ve, que viviti conloc, Catil ublis esultum notilium te etiu senatatude peritat pors noc reste tam quo venihineque audem
        </p>
        <img src="https://via.placeholder.com/150" alt="placeholder" className={styles.introImg} />
      </div>
      <div className={styles.containerCarrousel}>
        <Carousel imgs={imagesCarousel} />
      </div>
      <TitlePage label="LEURS ACTUALITÉS" />
      <TitlePage label="@BTK" />
      <TitlePage label="FESTIVAL" />
      <TitlePage label="PORTRAITS (LIEN SUR SHOTGUN PRIMITIV)" />
      <div className={styles.containerPortraits}>
        {imagesPortraits.map((src, index) => (
          <div key={index} className={styles.portraitContainer} onClick={() => handleClick(index)}>
            <img src={src} alt={`placeholder ${index}`} className={styles.portraitImg} />
            {activeIndex === index && (
              <div className={styles.legend}>
                <p>This is a legend for image {index + 1}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}