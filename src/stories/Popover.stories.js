import React from 'react';
import { Popover, Button } from 'antd';
import '../less/index.less';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export const popover = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Popover content={content} title="Title">
      <Button type="primary">Hover me</Button>
    </Popover>
  </div>
);

export default {
  title: 'Popover',
  component: popover,
};
