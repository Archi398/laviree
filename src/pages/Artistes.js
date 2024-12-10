import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import Portraits from '../components/organisms/Portraits';
import styles from '../styles/Artistes.module.css';

export default function Artistes() {
  const portraits = [
    {
      src: 'https://via.placeholder.com/150?text=Portrait+1',
      legend: 'This is a legend for image 1',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+2',
      legend: 'This is a legend for image 2',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+3',
      legend: 'This is a legend for image 3',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+4',
      legend: 'This is a legend for image 4',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+5',
      legend: 'This is a legend for image 5',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+6',
      legend: 'This is a legend for image 6',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+7',
      legend: 'This is a legend for image 7',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+8',
      legend: 'This is a legend for image 8',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+9',
      legend: 'This is a legend for image 9',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+10',
      legend: 'This is a legend for image 10',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+11',
      legend: 'This is a legend for image 11',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+12',
      legend: 'This is a legend for image 12',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+13',
      legend: 'This is a legend for image 13',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+14',
      legend: 'This is a legend for image 14',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+15',
      legend: 'This is a legend for image 15',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+16',
      legend: 'This is a legend for image 16',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+17',
      legend: 'This is a legend for image 17',
    },
    {
      src: 'https://via.placeholder.com/150?text=Portrait+18',
      legend: 'This is a legend for image 18',
    },
  ];

  return (
    <div className={styles.container}>
      <TitlePage label="NOS ARTISTES" />
      <Portraits portraits={portraits} />
    </div>
  );
}