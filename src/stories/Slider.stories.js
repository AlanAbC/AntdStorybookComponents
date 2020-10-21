import React from 'react';
import { Slider } from 'antd';
import '../less/index.less';

export const slider = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Slider defaultValue={30} style={{ width: 400 }} />
    <Slider range defaultValue={[20, 50]} style={{ width: 400 }} />
  </div>
);

export default {
  title: 'Slider',
  component: slider,
};
