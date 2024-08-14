"use client";

import React from 'react';
import { Tabs } from 'antd';
import styles from './TabsMenuComponent.module.scss';

const { TabPane } = Tabs;

const TabsMenuComponent: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" className={styles.tabsMenu}>
      <TabPane tab="Billetera" key="1">
        {/* Contenido para la pestaña "Token" */}
      </TabPane>
      <TabPane tab="Historial" key="2">
        {/* Contenido para la pestaña "Historial" */}
      </TabPane>
    </Tabs>
  );
};

export default TabsMenuComponent;
