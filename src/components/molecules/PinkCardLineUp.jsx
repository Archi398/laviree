import React from 'react';

export default function PinkCardLineUp({ dates, artistes }) {
  // Temporary data while waiting for the real line-up data
  const wipArtistes = [
    {
      name: 'À venir...',
      dates: [{ 
        date: '12/06/2026',
        hour: ''
      }]
    },
    {
      name: 'À venir...',
      dates: [{ 
        date: '13/06/2026',
        hour: ''
      }]
    },
    { 
      name: 'La Virée Sound System',
      dates: [{ 
        date: '14/06/2026',
        hour: ''
      }]
    }
  ];

  const renderArtistsForDate = (date, artistes) => {
    const artistsForDate = artistes.filter(artist =>
      artist.dates.some(dateObj => dateObj.date === date)
    );    

    console.log(date, artistsForDate);
    return artistsForDate.map((ar) => `${ar.name} ${ar.dates.find((dateObj) => dateObj.date === date).hour}`).join(' * ');
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
          <p>{renderArtistsForDate(date, wipArtistes)}</p>
        </div>
      ))}
    </div>
  );
}