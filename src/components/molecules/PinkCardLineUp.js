import React from 'react';

export default function PinkCardLineUp({ dates, artistes }) {
  const renderArtistsForDate = (date) => {
    const artistsForDate = artistes.filter(artist =>
      artist.dates.some(dateObj => dateObj.date === date)
    );
    return artistsForDate.map((ar) => `${ar.name}, ${ar.hour}`).join(' * ');
  };

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    const options = { weekday: 'long' };
    const dayName = new Intl.DateTimeFormat('fr-FR', options).format(date);
    return `${dayName} ${day}/${month}`;
  };

  return (
    <div>
      {dates.map((date, index) => (
        <div key={index}>
          <h2>{formatDate(date)}</h2>
          <p>{renderArtistsForDate(date)}</p>
        </div>
      ))}
    </div>
  );
}