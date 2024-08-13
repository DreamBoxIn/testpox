import Image from 'next/image';
import React from 'react';
import { Button } from 'antd';
import ButtonLoginComponent from '@/components/ButtonLoginComponent';
import styles from './HeaderComponent.module.scss';

const HeaderComponent: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <Image src="/logo.png" alt="MyLogo" width={50} height={50} />
      </div>
      <ButtonLoginComponent />
    </header>
  );
};

export default HeaderComponent;
