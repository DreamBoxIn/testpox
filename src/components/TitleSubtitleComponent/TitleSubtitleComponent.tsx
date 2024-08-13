import React from 'react';
import styles from './TitleSubtitleComponent.module.scss';

const TitleSubtitleComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PXO Token</h1>
      <h2 className={styles.subtitle}>La stablecoin basada en el peso MXN.</h2>
    </div>
  );
};

export default TitleSubtitleComponent;
