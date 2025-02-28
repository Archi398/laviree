import React from 'react';
import styles from '../../styles/PinkCard.module.css';
import PinkCardLineUp from '../molecules/PinkCardLineUp'; 
import PinkCardEdition from '../molecules/PinkCardEdition';
import PinkCardAssociation from '../molecules/PinkCardAssociation';

export default function PinkCard({ type, title, edition, artistes, style, description }) {
  const renderContent = () => {
    switch (type) {
      case 'lineUp':
        return <PinkCardLineUp dates={edition.dates} artistes={artistes} />;
      case 'edition':
        return <PinkCardEdition year={edition.year} artistes={artistes} />;
        case 'association':
        return <PinkCardAssociation description={description} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.containerCard} style={style}>
      <div className={styles.containerTitle}>
        <h1>{title}</h1>
      </div>
      <div className={styles.containerText}>
        {renderContent()}
      </div>
    </div>
  );
}