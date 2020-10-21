import React from 'react';
import { Statistic } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import '../less/index.less';

export const statistic = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
  </div>
);

export default {
  title: 'Statistic',
  component: statistic,
};
