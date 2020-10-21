import React from 'react';
import { List, Typography } from 'antd';
import '../less/index.less';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export const list = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text>
          {' '}
          {item}
        </List.Item>
      )}
    />
  </div>
);

export default {
  title: 'List',
  component: list,
};
