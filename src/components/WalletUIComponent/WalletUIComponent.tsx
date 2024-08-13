"use client"; // Asegúrate de que esta línea esté al principio

import React from 'react';
import { Card, Button } from 'antd';
import { ShoppingOutlined, DownloadOutlined, UploadOutlined, DollarOutlined } from '@ant-design/icons';
import styles from './WalletUIComponent.module.scss';

const WalletUIComponent: React.FC = () => {
  return (
    <Card className={styles.walletCard}>
      <div className={styles.buttonGroup}>
        <Button type="primary" className={styles.walletButton} icon={<ShoppingOutlined />}>
          Comprar
        </Button>
        <Button type="primary" className={styles.walletButton} icon={<DownloadOutlined />}>
          Recibir
        </Button>
        <Button type="primary" className={styles.walletButton} icon={<UploadOutlined />}>
          Enviar
        </Button>
        <Button type="primary" className={styles.walletButton} icon={<DollarOutlined />}>
          Vender
        </Button>
      </div>
    </Card>
  );
};

export default WalletUIComponent;
