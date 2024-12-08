import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import InfoActuCard from '../components/organisms/InfoActuCard';
import styles from '../styles/InfoActu.module.css';

export default function InfoActu() {
  const cards = [
    {
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          {/* <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
          <path d="M269.4 6C280.5-2 295.5-2 306.6 6l224 160c7.4 5.3 12.2 13.5 13.2 22.5l32 288c1 9-1.9 18.1-8 24.9s-14.7 10.7-23.8 10.7l-80 0-28.2 0c-12.1 0-23.2-6.8-28.6-17.7L306.7 293.5c-1.7-3.4-5.1-5.5-8.8-5.5c-5.5 0-9.9 4.4-9.9 9.9L288 480c0 17.7-14.3 32-32 32l-16 0L32 512c-9.1 0-17.8-3.9-23.8-10.7s-9-15.8-8-24.9l32-288c1-9 5.8-17.2 13.2-22.5L269.4 6z" />
        </svg>
      ),
      title: 'Camping',
      text: (
        <div>
          <h2>
            Services :
          </h2>
          <p>
            Des sanitaires (douches / WC), et points d'eau sont mis à disposition des festivaliers
          </p>
          <h2>
            Gestion des déchets :
          </h2>
          <p>
            Des points de tris sont installés dans le camping et le parking. Le plastique à usage unique est à éviter au maximum. Privilégiez les écocups, savons biodégradables. Pensez au ramassage des déchets et au tri sélectif.
          </p>
        </div>
      ),
      infos: (
        <div>
          <div>
            <div>
              <h3>
                Ouverture
              </h3>
            </div>
          </div>
          <div>
            <div>
              <ul>
                <li>
                  <span>
                    Du jeudi 22 Août à 18h
                  </span>
                </li>
                <li>
                  <span>
                    Au lundi 26 Août à 10h
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <h3>
                    <span>
                      Conditions daccès :
                    </span>
                  </h3>
                  <p>
                    Sur place, votre bracelet devra être présenté à chaque entrée et sortie du camping. Pour les personnes présentes 1 jour, le camping sera accessible uniquement le jour en question. Les moins de 18 ans doivent être accompagnés par un adulte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          {/* <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
          <path d="M269.4 6C280.5-2 295.5-2 306.6 6l224 160c7.4 5.3 12.2 13.5 13.2 22.5l32 288c1 9-1.9 18.1-8 24.9s-14.7 10.7-23.8 10.7l-80 0-28.2 0c-12.1 0-23.2-6.8-28.6-17.7L306.7 293.5c-1.7-3.4-5.1-5.5-8.8-5.5c-5.5 0-9.9 4.4-9.9 9.9L288 480c0 17.7-14.3 32-32 32l-16 0L32 512c-9.1 0-17.8-3.9-23.8-10.7s-9-15.8-8-24.9l32-288c1-9 5.8-17.2 13.2-22.5L269.4 6z" />
        </svg>
      ),
      title: 'Camping 2',
      text: (
        <div>
          <h2>
            Services :
          </h2>
          <p>
            Des sanitaires (douches / WC), et points d'eau sont mis à disposition des festivaliers
          </p>
          <h2>
            Gestion des déchets :
          </h2>
          <p>
            Des points de tris sont installés dans le camping et le parking. Le plastique à usage unique est à éviter au maximum. Privilégiez les écocups, savons biodégradables. Pensez au ramassage des déchets et au tri sélectif.
          </p>
        </div>
      ),
      infos: (
        <div>
          <div>
            <div>
              <h3>
                Ouverture
              </h3>
            </div>
          </div>
          <div>
            <div>
              <ul>
                <li>
                  <span>
                    Du jeudi 22 Août à 18h
                  </span>
                </li>
                <li>
                  <span>
                    Au lundi 26 Août à 10h
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <h3>
                    <span>
                      Conditions daccès :
                    </span>
                  </h3>
                  <p>
                    Sur place, votre bracelet devra être présenté à chaque entrée et sortie du camping. Pour les personnes présentes 1 jour, le camping sera accessible uniquement le jour en question. Les moins de 18 ans doivent être accompagnés par un adulte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          {/* <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
          <path d="M269.4 6C280.5-2 295.5-2 306.6 6l224 160c7.4 5.3 12.2 13.5 13.2 22.5l32 288c1 9-1.9 18.1-8 24.9s-14.7 10.7-23.8 10.7l-80 0-28.2 0c-12.1 0-23.2-6.8-28.6-17.7L306.7 293.5c-1.7-3.4-5.1-5.5-8.8-5.5c-5.5 0-9.9 4.4-9.9 9.9L288 480c0 17.7-14.3 32-32 32l-16 0L32 512c-9.1 0-17.8-3.9-23.8-10.7s-9-15.8-8-24.9l32-288c1-9 5.8-17.2 13.2-22.5L269.4 6z" />
        </svg>
      ),
      title: 'Camping 3',
      text: (
        <div>
          <h2>
            Services :
          </h2>
          <p>
            Des sanitaires (douches / WC), et points d'eau sont mis à disposition des festivaliers
          </p>
          <h2>
            Gestion des déchets :
          </h2>
          <p>
            Des points de tris sont installés dans le camping et le parking. Le plastique à usage unique est à éviter au maximum. Privilégiez les écocups, savons biodégradables. Pensez au ramassage des déchets et au tri sélectif.
          </p>
        </div>
      ),
      infos: (
        <div>
          <div>
            <div>
              <h3>
                Ouverture
              </h3>
            </div>
          </div>
          <div>
            <div>
              <ul>
                <li>
                  <span>
                    Du jeudi 22 Août à 18h
                  </span>
                </li>
                <li>
                  <span>
                    Au lundi 26 Août à 10h
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <h3>
                    <span>
                      Conditions daccès :
                    </span>
                  </h3>
                  <p>
                    Sur place, votre bracelet devra être présenté à chaque entrée et sortie du camping. Pour les personnes présentes 1 jour, le camping sera accessible uniquement le jour en question. Les moins de 18 ans doivent être accompagnés par un adulte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
  ]



  return (
    <div className={styles.container}>
      <TitlePage label="Infos et Actualités" />
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