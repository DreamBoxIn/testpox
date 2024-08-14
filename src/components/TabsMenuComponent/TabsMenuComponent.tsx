"use client";

import React from 'react';
import { Tabs, List, Avatar } from 'antd';
import styles from './TabsMenuComponent.module.scss';

const { TabPane } = Tabs;

const TabsMenuComponent: React.FC = () => {
  const walletData = [
    { title: 'Token 1', description: '1000 PXO', icon: '/icons/token1.png' },
    { title: 'Token 2', description: '500 USDC', icon: '/icons/token2.png' },
  ];

  const historyData = [
    { title: 'Compra', description: 'Compraste 500 PXO', date: '2024-08-15' },
    { title: 'Venta', description: 'Vendiste 200 USDC', date: '2024-08-14' },
  ];

  return (
    <Tabs defaultActiveKey="1" className={styles.tabsMenu}>
      <TabPane tab="Billetera" key="1">
        <List
          itemLayout="horizontal"
          dataSource={walletData}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.icon} />}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </TabPane>
      <TabPane tab="Historial" key="2">
        <List
          itemLayout="horizontal"
          dataSource={historyData}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={`${item.description} - ${item.date}`}
              />
            </List.Item>
          )}
        />
      </TabPane>
    </Tabs>
  );
};

export default TabsMenuComponent;
