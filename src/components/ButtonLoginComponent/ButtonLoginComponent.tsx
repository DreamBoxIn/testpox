import React from 'react';
import { Button } from 'antd';
import styles from './ButtonLoginComponent.module.scss';

const ButtonLoginComponent: React.FC = () => {
  return (
    <Button type="primary" className={styles.button}>
      Login
    </Button>
  );
};

export default ButtonLoginComponent;
