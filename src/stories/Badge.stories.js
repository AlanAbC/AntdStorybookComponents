import React from 'react';
import { Badge } from 'antd';
import '../less/index.less';

export const badge = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Badge count={25} />
    <br />
    <Badge count={4} className="site-badge-count-4" />
    <br />
    <Badge className="site-badge-count-109" count={109} style={{ backgroundColor: '#52c41a' }} />
    <br />
  </div>
);

export default {
  title: 'Badge',
  component: badge,
};
