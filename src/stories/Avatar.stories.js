import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../less/index.less';

export const avatar = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Avatar icon={<UserOutlined />} />
    <br />
    <Avatar>U</Avatar>
    <br />
    <Avatar size={40}>USER</Avatar>
    <br />
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <br />
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    <br />
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
  </div>
);

export default {
  title: 'Avatar',
  component: avatar,
};
