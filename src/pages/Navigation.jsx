import React, { useState } from 'react';
import styles from '../styles/Navigation.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import Dropdown from '../components/organisms/Dropdown';

export default function Navigation() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const [dropdownVisible3, setDropdownVisible3] = useState(false);

  const dropdownLinks1 = [
    { path: '/infos', label: 'infos' },
    { path: '/actualites', label: 'actualités' },
    { path: '/line-up', label: 'line up' },
    { path: '/courts-metrages', label: 'courts-métrages' },
    { path: '/after', label: 'l\'after • BTK' },
  ];

  const dropdownLinks2 = [
    { path: '/artistes', label: 'nos artistes' },
    { path: '/edition/2023', label: 'édition 2023' },
    { path: '/edition/2022', label: 'édition 2022' },
    { path: '/edition/2021', label: 'édition 2021' },
  ];

  const dropdownLinks3 = [
    { path: '/association', label: 'l\'association' },
    { path: '/equipe', label: 'l\'équipe' },
  ];

  return (
    <div>
      <div className={styles.container}>
        <nav className={styles.containerNav}>
          <div className={styles.containerNavFirstSection}>
            <div className={styles.containerNavLeftSection}>
              <NavLink
                to={'/'}
                style={{ textDecoration: 'none', display: 'block', width: 'fit-content' }}
              >
                  <h1 className={styles.title} data-title="LA VIREE">LA VIR&#xE001;E</h1>
                  <h2 className={styles.subtitle}>FESTIVAL</h2>
              </NavLink> 
            </div>
            <div className={styles.containerNavRightSection}>
              <Dropdown
                label="Édition 2025"
                links={dropdownLinks1}
                visible={dropdownVisible}
                toggleDropdown={setDropdownVisible}
              />
              <span className={styles.dropdwonSeparator}>|</span>
              <Dropdown
                label="Archives"
                links={dropdownLinks2}
                visible={dropdownVisible2}
                toggleDropdown={setDropdownVisible2}
              />
              <span className={styles.dropdwonSeparator}>|</span>
              <Dropdown
                label=" Qui sommes nous?"
                links={dropdownLinks3}
                visible={dropdownVisible3}
                toggleDropdown={setDropdownVisible3}
              />
            </div>
          </div>
          <div className={styles.containerNavSecondSection}>
            <a className={styles.btnTickets} target='_blank' rel="noreferrer" href='https://www.helloasso.com/associations/la-viree/evenements/la-viree-festival-2025'>Prenez vos places ici</a>
          </div>
        </nav>
      </div>

      <div className={styles.containerSocialNetworks}>
        {/* INSTAGRAM */}
        <a className={styles.btnSocialNetworks} target='_blank' rel="noreferrer" href='https://www.instagram.com/laviree_festival/'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            {/* !Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </a>
        {/* FACEBOOK */}
        <a className={styles.btnSocialNetworks} target='_blank' rel="noreferrer" href='https://www.facebook.com/profile.php?id=100090413004398'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            {/* !Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </a>
        {/* MERCH */}
        <a className={styles.btnSocialNetworks} target='_blank' rel="noreferrer" href='https://www.helloasso.com/associations/la-viree/boutiques/merch-edition-2025-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            {/* !Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
            <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z" />
          </svg>
        </a>
        {/* SPOTIFY */}
        <a className={styles.btnSocialNetworks} target='_blank' rel="noreferrer" href='https://open.spotify.com/playlist/7aZDjKozUcB2L7f5qryblP?si=anlr1GIhSrSqMSXQ3nZCCg'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            {/* !Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
            <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
          </svg>
        </a>
      </div>


      <Outlet />
    </div>
  );
}