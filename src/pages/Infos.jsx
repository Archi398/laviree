import { useEffect } from 'react';
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
            Gare d'Argenton sur Creuse (direct depuis Paris) <br />
            Navette gratuite le vendredi et le dimanche —10mn
          </p>
          <h2>
            Car
          </h2>
          <p>
            Informations à venir  👀
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
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img style={{ maxWidth: "70%" }} src="/images/infoActuLogo/chateaudecelon.png" alt="Chateau de Celon" />
          </div>
        </div>
      )
    },
    {
      logo: (
        <img src="/images/infoActuLogo/village.png" alt="village logo" />
      ),
      title: 'Village',
      text: (
        <div>
          <h2>
            Nourriture / Boissons
          </h2>
          <p>
            Bar : ouvert 24h/24h. Bouilloires et micro-ondes mis à disposition <br />
            Foodtrucks : végé et pas que
          </p>
          <h2>
            Stands
          </h2>
          <p>
            Activités, friperie, artistes… à venir découvrir
          </p>
        </div>
      ),
      infos: (
        <div>
          <h1>
            Le bar
          </h1>
          <p>
            <span className={styles.dotLeaders}>
              <span>Blonde (25cL)</span>
              <span className={styles.dots}></span>
              <span>2,5€</span>
            </span>
            <span className={styles.dotLeaders}>
              <span>IPA (25cL)</span>
              <span className={styles.dots}></span>
              <span>3€</span>
            </span>
            <br />
            <span className={styles.dotLeaders}>
              <span>Jus de fruit</span>
              <span className={styles.dots}></span>
              <span>2€</span>
            </span>
            <span className={styles.dotLeaders}>
              <span>Soda</span>
              <span className={styles.dots}></span>
              <span>2€</span>
            </span>
            <span className={styles.dotLeaders}>
              <span>Café</span>
              <span className={styles.dots}></span>
              <span>1€</span>
            </span>
            <span className={styles.dotLeaders}>
              <span>Thé</span>
              <span className={styles.dots}></span>
              <span>1€</span>
            </span>
            <span className={styles.dotLeaders}>
              <span>Eau</span>
              <span className={styles.dots}></span>
              <span>0€</span>
            </span>
            <br />
            
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
            Douches & WC
          </p>
          <h2>
            Déchets
          </h2>
          <p>
            Pensez à minimiser vos emballages et à utiliser les points de tris
          </p>
        </div>
      ),
      infos: (
        <div>
          <h1>
            Ouverture
          </h1>
          <p>
            Du vendredi 12 juin à 16h <br />
            Au lundi 15 juin à 13h
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
            En cas de sentiment de danger ou d'insécurité, le bar est ouvert 24h/24h. Un.e membre de l'équipe sera là pour vous aider.
            <br />
            Une équipe de premiers secours sera présente.
          </p>
        </div>)
    },
  ];

  useEffect(() => {
    document.title = 'LA VIRÉE | Infos Pratiques';
  }, []);

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