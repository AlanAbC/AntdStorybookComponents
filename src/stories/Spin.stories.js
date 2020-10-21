import React from 'react';
import { Spin } from 'antd';
import '../less/index.less';

export const spin = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Spin />
  </div>
);

export default {
  title: 'Spin',
  component: spin,
};
