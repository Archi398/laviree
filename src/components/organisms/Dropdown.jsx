import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/Navigation.module.css';

const Dropdown = ({ label, links, visible, toggleDropdown }) => {
  const dropdownRef = useRef(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setClosing(true);
        setTimeout(() => {
          toggleDropdown(false);
          setClosing(false);
        }, 500);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleDropdown]);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <span className={styles.navLink} onClick={() => toggleDropdown(!visible)}>
        {label}
      </span>
      <div className={`${styles.dropdown} ${visible ? styles.visible : ''} ${closing ? styles.closing : ''}`}>
        <hr style={{ border: '1px solid var(--color-viree)', width: '100%', margin: '0' }} />
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={styles.navLinkDropdown}
            onClick={() => toggleDropdown(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;