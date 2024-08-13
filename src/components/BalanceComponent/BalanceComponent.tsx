import React from 'react';
import { Select } from 'antd';
import styles from './BalanceComponent.module.scss';

const { Option } = Select;

const BalanceComponent: React.FC = () => {
  return (
    <div className={styles.balanceContainer}>
      <span className={styles.balanceLabel}>Saldo disponible:</span>
      <div className={styles.balanceValueContainer}>
        <span className={styles.balanceValue}>10,000</span>
        <Select defaultValue="PXO" className={styles.currencySelect}>
          <Option value="PXO">PXO</Option>
          <Option value="USD">USDC</Option>
          <Option value="USDT">USDT</Option>
        </Select>
      </div>
    </div>
  );
};

export default BalanceComponent;
