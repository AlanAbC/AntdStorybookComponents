import React from 'react';
import { Radio } from 'antd';
import '../less/index.less';

export const radio = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Radio.Group>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  </div>
);

export default {
  title: 'Radio',
  component: radio,
};
