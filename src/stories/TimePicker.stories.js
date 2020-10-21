import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';
import '../less/index.less';

export const timePicker = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <TimePicker
      defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
    />
  </div>
);

export default {
  title: 'TimePicker',
  component: timePicker,
};
