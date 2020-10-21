import React from 'react';
import { Layout } from 'antd';
import '../less/index.less';

const {
  Header, Footer, Sider, Content,
} = Layout;

export const layout = () => (
  <div>
    <Layout>
      <Sider theme="light">Sider</Sider>
      <Layout>
        <Header theme="light">Header</Header>
        <Content theme="light">Content</Content>
        <Footer theme="light">Footer</Footer>
      </Layout>
    </Layout>
  </div>
);

export default {
  title: 'Layout',
  component: layout,
};
