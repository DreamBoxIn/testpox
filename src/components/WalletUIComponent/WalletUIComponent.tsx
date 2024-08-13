"use client"; // Asegúrate de que esta línea esté al principio

import React, { useState } from 'react';
import { Card, Button, Select, Typography } from 'antd';
import { ShoppingOutlined, DownloadOutlined, UploadOutlined, DollarOutlined } from '@ant-design/icons';
import styles from './WalletUIComponent.module.scss';

const { Option } = Select;
const { Text } = Typography;

const WalletUIComponent: React.FC = () => {
  const [currency, setCurrency] = useState('PXO');

  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
  };

  return (
    <Card className={styles.walletCard}>
      <div className={styles.balanceSection}>
        <Text className={styles.balanceText}>Saldo disponible:</Text>
        <Text className={styles.balanceAmount}>10,000</Text>
        <Select
          value={currency}
          onChange={handleCurrencyChange}
          className={styles.currencySelect}
        >
          <Option value="PXO">PXO</Option>
          <Option value="USD">USD</Option>
          <Option value="USDT">USDT</Option>
        </Select>
      </div>
      <div className={styles.buttonGroup}>
        <Button type="primary" className={styles.walletButton} icon={<ShoppingOutlined />}>
          Comprar
        </Button>
        <Button type="primary" className={styles.walletButton} icon={<UploadOutlined />}>
          Enviar
        </Button>
        <Button type="primary" className={styles.walletButton} icon={<DownloadOutlined />}>
          Recibir
        </Button>
        <Button type="primary" className={styles.walletButton} icon={<DollarOutlined />}>
          Vender
        </Button>
      </div>
    </Card>
  );
};

export default WalletUIComponent;
