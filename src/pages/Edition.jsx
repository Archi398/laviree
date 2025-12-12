import { useEffect } from 'react';
import TitlePage from '../components/atoms/TitlePage';
import Carousel from '../components/organisms/Carousel';
import PinkCard from '../components/organisms/PinkCard';
import InfoActuCard from '../components/organisms/InfoActuCard';
import styles from '../styles/Edition.module.css';
import { editionsData } from '../data/editionsData';
import { artistesData } from '../data/artistesData';

export default function Edition({ year }) {
  const edition = editionsData.find((ed) => ed.year === year);
  const artistes = artistesData.filter((art) => art.editions.includes(year));

  useEffect(() => {
    document.title = `LA VIRÉE | Édition ${year}`;
  }, [year]);

  const renderSubTitle = (dates, place) => {
    const formattedDates = dates.map((date) => {
      const [day] = date.split('/');
      return `${day}`;
    }).join('-');

    const [day, month, year] = dates[0].split('/');
    const dateObj = new Date(`${year}-${month}-${day}`);
    const monthName = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(dateObj).toUpperCase();

    return `${formattedDates} ${monthName} ${year} - ${place}`;
  };
  const subTitle = edition ? renderSubTitle(edition.dates, edition.place) : '';

  const cards = [
    {
      logo: (
        <img src="/images/infoActuLogo/soiree.png" alt="soirée logo" />
      ),
      title: 'Soirée Tremplin au Hasard Ludique',
      text: (
        <div>
          <p>
            La Virée revient au Hasard Ludique le samedi 5 avril pour notre finale du concours tremplin. <br />
            Les 5 artistes finalistes sélectionné·es se produiront sur scène et c’est vous qui aurez le dernier mot : votre vote déterminera qui jouera au festival La Virée du 27 au 29 juin.
          </p>
          <h2>
            Prends tes billets
          </h2>
          <p>
            <a href='https://shotgun.live/fr/events/la-viree?fbclid=PAZXh0bgNhZW0CMTEAAaZ9cj1WMNfXYq7M4RN_g4KiYmCr3c3DX_PAB5r2Gw9rFaNFjaBUs0_95Fs_aem_zqw2A4pwQd8pHG8i_78-6A' target='_blank' rel='noreferrer'>
              Billetterie Shotgun
            </a>
          </p>
          <h2>
            Line up
          </h2>
          <p>
            * +++ : Indie Rock <br />
            * Après Garde : Post-Punk <br />
            * Louga : Rap Electro <br />
            * Nenasita : Pop Reggeaton <br />
            * Sainte - Rim : Hip-hop alternatif, Électro et Pop Rock <br />
          </p>
        </div>
      ),
      infos: (
        <div>
          <h1>
            Infos
          </h1>
          <p>
            Le 5 avril 2025
          </p>
          <p>
            <strong>
              20h → 01h30
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
    {
      logo: (
        <img src="/images/infoActuLogo/concours.png" alt="concours logo" />
      ),
      title: 'Concours tremplin',
      text: (
        <div>
          <p>
            Le concours tremplin de La Virée Festival est ouvert aux artistes émergent.e.s de tous genres. Après une première sélection par les membres du collectif, les candidat.e.s retenu.e.s seront soumis.e.s au vote du public sur Instagram. <br />
            Les 5 finalistes ayant obtenu le plus de votes se produiront en live lors de la finale au Hasard Ludique le samedi 5 avril 2025. <br />
            Le/la gagnant.e sera désigné.e selon sa performance, son originalité et son interaction avec le public. À la clé, il/elle décrochera sa place pour venir performer lors de la 4ème édition du festival La Virée le 27-28-29 juin 2025.
          </p>
        </div>
      ),
      infos: (
        <div>
          <h1>
            Infos
          </h1>
          <p>
            <strong>
              Envoyez vos candidatures avant le 05/03/2025 à 23h59
              via le formulaire :
            </strong>
          </p>
          <p>
            <a href='https://docs.google.com/forms/d/1XGS6UBEKnZzVFokYK22wUvnRLGONU44TqRF4QLUGCvE/edit' target='_blank' rel='noreferrer'>
              CLIQUEZ ICI
            </a>
          </p>
          <p>
            Retrouvez toutes les autres infos sur insta :
            @laviree_festival
          </p>
        </div>
      )
    },
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
      <TitlePage label={`édition ${year}`} subTitle={subTitle} />
      {
        edition.images.length > 0 && (
          <Carousel key={year} imgs={edition ? edition.images : []} />
        )
      }
      <PinkCard
        type={'edition'}
        title="Les artistes"
        edition={edition ? edition : []}
        artistes={artistes ? artistes : []}
        style={{ marginTop: '50px' }}
      />
      {
        year === 2025 && (
          <>
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
          </>
        )
      }
    </div>
  );
}