import React from 'react';
import { Card } from 'antd';
import '../less/index.less';

export const card = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Card title="Card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
);

export default {
  title: 'Card',
  component: card,
};
