"use client"; // Asegúrate de que esta línea esté al principio

import React from 'react';
import { Card, Button } from 'antd';
import styles from './WalletUIComponent.module.scss';

const WalletUIComponent: React.FC = () => {
  return (
    <Card className={styles.walletCard}>
      <div className={styles.buttonGroup}>
        <Button type="primary" className={styles.walletButton}>Comprar</Button>
        <Button type="primary" className={styles.walletButton}>Recibir</Button>
        <Button type="primary" className={styles.walletButton}>Enviar</Button>
        <Button type="primary" className={styles.walletButton}>Vender</Button>
      </div>
    </Card>
  );
};

export default WalletUIComponent;
