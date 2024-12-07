import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/Navigation.module.css';

const Dropdown = ({ label, links, visible, toggleDropdown }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggleDropdown(false);
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
      <div className={`${styles.dropdown} ${visible ? styles.visible : ''}`}>
        <hr style={{ border: '1px solid #c38fbe', width: '100%', margin: '0' }} />
        {links.map((link, index) => (
          <NavLink key={index} className={styles.navLinkDropdown} to={link.path}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;