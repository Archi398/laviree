import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import PinkCard from '../components/organisms/PinkCard';
import styles from '../styles/Association.module.css';

export default function Association() {

  return (
    <div className={styles.container}>
      <TitlePage label="l'association" />
      <div className={styles.containerIntro}>
        <p className={styles.introText}>
          En 2021, La Virée naît avec la vocation d'offrir un lieu d'expression artistique. Elle est avant tout un groupe de passionné.e.s d'art et de musique qui trouve, dans l'organisation d'un tel événement, un lieu de création collectif et pluridisciplinaire. En l'état, il ne s'agit pas d'inventer une nouvelle manière de faire la fête mais de proposer une nouvelle manière de se retrouver.
          <br />
          Durant ses deux premières éditions, des artistes musicaux émergents se produisent sur la scène de La Virée. Le public est alors invité à un voyage - d'où le nom du festival - à la fois physiquement en investissant des lieux atypiques et musicalement avec une programmation variée. Pour certain.e.s artistes, il s'agit de leur première expérience scénique. C'est pour cela que, depuis sa création et avec un développement permanent, ce festival s'attache à conserver une dimension humaine. Que ce soit pour des raisons écologiques, de sécurité et de bienveillance, nous avons à cœur que chaque artiste, chaque bénévole et chaque festivalier.ère qui prend part à cette expédition se sente investi des valeurs que nous défendons. <br />
          A partir de 2023, pour sa troisième édition, La Virée se tourne également vers d'autres formes d'expression en aménageant une ancienne chapelle en une exposition de photographies, de toiles, de sculptures…
          <br />
          En s'attachant à toujours se réinventer, notre équipe invite toutes nos habitué.e.s et nos nouvelles venues à se rencontrer et à partager.
          <br />
          Il est temps de nous retrouver.
        </p>
        <img src="/images/logo3D.png" alt="placeholder" className={styles.introImg} />
      </div>
      <PinkCard
        type="association"
        title="CHARTE DE BIENVEILLANCE"
        description="Bonjour me voici"
      />
    </div>
  );
}