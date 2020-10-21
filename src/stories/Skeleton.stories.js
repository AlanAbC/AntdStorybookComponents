import React from 'react';
import { Skeleton } from 'antd';
import '../less/index.less';

export const skeleton = () => (
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', width: 500,
  }}
  >
    <Skeleton />
  </div>
);

export default {
  title: 'Skeleton',
  component: skeleton,
};
