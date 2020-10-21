import React from 'react';
import { Popconfirm } from 'antd';
import '../less/index.less';

export const popconfirm = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Popconfirm
      title="Are you sure delete this task?"
      okText="Yes"
      cancelText="No"
    >
      <a href="#">Delete</a>
    </Popconfirm>
  </div>
);

export default {
  title: 'Popconfirm',
  component: popconfirm,
};
