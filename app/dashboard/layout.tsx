'use client';

import { Layout } from 'antd';
import type { FC, PropsWithChildren } from 'react';

const DashboardLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout className="min-h-screen bg-red-500">
      <Header>Header</Header>
      <Layout>
        <Sider className="w-4 bg-green-500">Sider</Sider>
        <Content>{children}</Content>
      </Layout>
      <Footer className="bg-red-500">Footer</Footer>
    </Layout>
  );
};

export default DashboardLayout;
