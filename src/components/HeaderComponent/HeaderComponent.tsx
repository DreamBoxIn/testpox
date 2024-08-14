'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import styles from './HeaderComponent.module.scss';

const HeaderComponent: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="MyLogo" width={100} height={100} />
      </div>
      <Button type="primary" className={styles.loginButton}>
        Login
      </Button>
    </header>
  );
};

export default HeaderComponent;
