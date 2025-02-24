import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import InfoActuCard from '../components/organisms/InfoActuCard';
import styles from '../styles/InfoActu.module.css';

export default function Actulites() {
  const cards = [
    {
      logo: (
        <img src="/images/infoActuLogo/courtmetrage.png" alt="court métrage logo" />
      ),
      title: 'Appel à courts-métrages',
      text: (
        <div>
          <p>
            Cette année, La Virée propose un espace dédié à la projection de Courts-Métrages.
          </p>
          <p>
            Quelque soit votre expérience, cette édition 2025 offrira à tous⋅tes l'opportunité de faire découvrir vos films.
          </p>
          <h2>
            Modalité de participation
          </h2>
          <p>
            • Thème : Libre
          </p>
          <p>
            • Format : <br />
            - Prise de vue réelle * Documentaire <br />
            - Fiction * Animation
          </p>
          <p>
            • Durée : 5 à 25 minutes
          </p>
          <p>
            • Sous-titres : en français si possible <br />
            (obligatoire pour les films étrangers)
          </p>
          <p>
            Chaque film bénéficiera d'un espace d'affichage dédié dans le cadre d'une exposition autour de ces projections.
          </p>
          <h3>
            Si vous êtes sélectionné·E·S, vous gagnerez 2 places pour le Festival LA VIR&#xE001;E 2025.
          </h3>
        </div>
      ),
      infos: (
        <div>
          <h1>
            Infos
          </h1>
          <p>
            <strong>
              Envoyez vos films avant le 01/05/2025 via wetransfer à :
            </strong>
            lavireemusicale@gmail.com
          </p>
          <p>
            Pensez à joindre une note de présentation ainsi que des documents visuels des productions (Titre / Contexte / Synopsis / Noms / Affiche / Photos de tournages / Storyboard / etc.)
          </p>
        </div>
      )
    },
    {
      logo: (
        <img src="/images/infoActuLogo/concours.png" alt="concours logo" />
      ),
      title: 'Concours tremplin',
      text: (
        <div>
          <p>

          </p>
        </div>
      ),
      infos: (
        <div>
          <h1>
            Infos
          </h1>
          <p>
            À venir
          </p>
        </div>
      )
    },
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