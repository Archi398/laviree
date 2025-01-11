import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import InfoActuCard from '../components/organisms/InfoActuCard';
import styles from '../styles/InfoActu.module.css';

export default function Infos() {
  const cards = [
    {
      logo: (
        <img src="/images/infoActuLogo/acces.png" alt="accès logo" />
      ),
      title: 'accès',
      text: (
        <div>
          <h2>
            En voiture
          </h2>
          <p>
            3h au départ de Paris <br />
            1h40 de Poitiers <br />
            2h40 de Clermont-Ferrand
          </p>
          <h2>
            En train
          </h2>
          <p>
            Gare d'Argenton sur Creuse → 10 mn en navette
          </p>
        </div>
      ),
      infos: (
        <div>
          <h1>
            Adresse
          </h1>
          <p>
            Chateau de Célon <br />
            1 Rue du Château, 36200 Celon
          </p>
        </div>
      )
    },
    {
      logo: (
        <img src="/images/infoActuLogo/camping.png" alt="camping logo" />
      ),
      title: 'Camping',
      text: (
        <div>
          <h2>
            Services
          </h2>
          <p>
            Des sanitaires (douches / WC), et points d'eau sont mis à disposition des festivaliers
          </p>
          <h2>
            Déchets
          </h2>
          <p>
            Des points de tris sont installés dans le camping et le parking. Le plastique à usage unique est à éviter au maximum. Ramenez vos écocups !
          </p>
        </div>
      ),
      infos: (
        <div>
          <h1>
            Ouverture
          </h1>
          <p>
            Vendredi 27 juin à 16h <br />
            Dimanche 29 juin à 17h
          </p>
        </div>
      )
    },
    {
      logo: (
        <img src="/images/infoActuLogo/securite.png" alt="sécurité logo" />
      ),
      title: 'Sécurité',
      text: (
        <div>
          <h2>
            Accès au festival
          </h2>
          <p>
            Contrôle de sécurité à l'entrée. Les moins de 18 ans doivent être accompagnés par un adulte.
          </p>
          <h2>
            Sur place
          </h2>
          <p>
            La Virée festival c'est aussi un espace où liberté, sécurité, respect et tolérance sont les règles d'or de chaque séjour. Chacun.e doit se sentir à sa place dans un environnement ouvert et bienveillant. Les comportements discriminatoires, dangereux, et agressifs de tous types sont bannis.
          </p>
          <p>
            Nous nous réservons le droit de refuser l'entrée et d'exclure toute personne qui ne respecterait pas ces valeurs afin de préserver nos festivaliers.
          </p>
        </div>
      ),
      infos: (
        <div>
          <h1>
            Secours
          </h1>
          <p>
          Des bénévoles formés aux premiers secours seront sur place si besoin.
          </p>
        </div>)
    },
  ]



  return (
    <div className={styles.container}>
      <TitlePage label="Infos Pratiques" />
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