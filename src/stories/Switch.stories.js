import React from 'react';
import { Switch } from 'antd';
import '../less/index.less';

export const switchComponent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Switch defaultChecked />
  </div>
);

export default {
  title: 'Switch',
  component: switchComponent,
};
