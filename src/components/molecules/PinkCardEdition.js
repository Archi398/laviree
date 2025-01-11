import React from 'react';

export default function PinkCardEdition({ year, artistes }) {
  const renderArtistsByType = (year, type) => {
    const artists = artistes
      .filter((art) => art.editions.includes(year) && art.type === type)
      .sort((a, b) => a.name.localeCompare(b.name));

    return artists.map((ar) => `${ar.name}`).join(' * ');
  };

  return (
    <div>
      <p>{renderArtistsByType(year, 'musique')}</p>
      <p>{renderArtistsByType(year, 'art')}</p>
    </div>
  );
}