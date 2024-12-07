import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import styles from '../styles/InfoActu.module.css';

export default function InfoActu() {
  return (
    <div className={styles.container}>
      <TitlePage label="Infos et Actualités" />
      <div className={styles.containerCard} style={{marginTop: '0'}} >
        <div className={styles.containerLogo} >

        </div>
        <div className={styles.containerTitle} >

        </div>
        <div className={styles.containerText} >
          <div>
            <h2>
              <strong>
                Services :
              </strong>
            </h2>
            <p>
              Des sanitaires (douches / WC), et points d'eau sont mis à disposition des festivaliers
            </p>
            <h2>
              <strong>
                Gestion des déchets :
              </strong>
            </h2>
            <p>
              Des points de tris sont installés dans le camping et le parking. Le plastique à usage unique est à éviter au maximum. Privilégiez les écocups, savons biodégradables. Pensez au ramassage des déchets et au tri sélectif.
            </p>
          </div>
        </div>
        <div className={styles.containerInfos} >
          <div>
            <div>
              <div>
                <h3>Ouverture </h3>
              </div>
            </div>
            <div>
              <div>
                <ul>
                  <li>
                    <span>Du jeudi 22 Août à 18h </span>
                  </li>
                  <li>
                    <span>Au lundi 26 Août à 10h</span>
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
        </div>
      </div>
    </div>
  );
}