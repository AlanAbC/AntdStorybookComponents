import React from 'react';
import { Breadcrumb } from 'antd';
import '../less/index.less';

export const breadcrumb = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        Application Center
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Application List
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

export default {
  title: 'Breadcrumb',
  component: breadcrumb,
};
