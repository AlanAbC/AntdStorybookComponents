import React from 'react';
import { Tooltip } from 'antd';
import '../less/index.less';

export const tooltip = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Tooltip title="prompt text">
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  </div>
);

export default {
  title: 'Tooltip',
  component: tooltip,
};
