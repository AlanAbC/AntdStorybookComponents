import React from 'react';
import { Checkbox } from 'antd';
import '../less/index.less';

export const checkbox = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Checkbox>Checkbox</Checkbox>
  </div>
);

export default {
  title: 'Checkbox',
  component: checkbox,
};
