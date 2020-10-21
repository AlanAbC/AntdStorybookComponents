import React from 'react';
import { Calendar } from 'antd';
import '../less/index.less';

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

export const calendar = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Calendar onPanelChange={onPanelChange} />
  </div>
);

export default {
  title: 'Calendar',
  component: calendar,
};
