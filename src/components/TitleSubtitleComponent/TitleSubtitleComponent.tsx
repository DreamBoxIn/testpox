import React from 'react';
import styles from './TitleSubtitleComponent.module.scss';

const TitleSubtitleComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Intercambio</h1>
      <h2 className={styles.subtitle}>Entre monedas estales 1:1 con MXN y USD</h2>
    </div>
  );
};

export default TitleSubtitleComponent;
