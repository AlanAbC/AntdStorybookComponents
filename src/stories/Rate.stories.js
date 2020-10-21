import React from 'react';
import { Rate } from 'antd';
import '../less/index.less';

export const rate = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Rate />
  </div>
);

export default {
  title: 'Rate',
  component: rate,
};
