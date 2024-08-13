"use client"; // Asegúrate de que esta línea esté al principio

import React from 'react';
import { Card, Button } from 'antd';
import { ShoppingOutlined, DownloadOutlined, UploadOutlined, DollarOutlined } from '@ant-design/icons';
import BalanceComponent from '@/components/BalanceComponent/BalanceComponent';
import styles from './WalletUIComponent.module.scss';

const WalletUIComponent: React.FC = () => {
  const handleButtonClick = (action: string) => {
    console.log(`${action} clicked`);
    // Aquí puedes manejar la lógica de cada botón
  };

  return (
    <Card className={styles.walletCard}>
      <BalanceComponent />
      <div className={styles.buttonGroup}>
        <div
          className={styles.walletButtonContainer}
          onClick={() => handleButtonClick('Comprar')}
        >
          <Button type="primary" className={styles.walletButton}>
            <ShoppingOutlined />
          </Button>
          <span className={styles.buttonLabel}>Comprar</span>
        </div>

        <div
          className={styles.walletButtonContainer}
          onClick={() => handleButtonClick('Enviar')}
        >
          <Button type="primary" className={styles.walletButton}>
            <UploadOutlined />
          </Button>
          <span className={styles.buttonLabel}>Enviar</span>
        </div>

        <div
          className={styles.walletButtonContainer}
          onClick={() => handleButtonClick('Recibir')}
        >
          <Button type="primary" className={styles.walletButton}>
            <DownloadOutlined />
          </Button>
          <span className={styles.buttonLabel}>Recibir</span>
        </div>

        <div
          className={styles.walletButtonContainer}
          onClick={() => handleButtonClick('Vender')}
        >
          <Button type="primary" className={styles.walletButton}>
            <DollarOutlined />
          </Button>
          <span className={styles.buttonLabel}>Vender</span>
        </div>
      </div>
    </Card>
  );
};

export default WalletUIComponent;
