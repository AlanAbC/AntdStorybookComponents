import React from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../less/index.less';

export const button = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Button type="primary">Primary Button</Button>
    <br />
    <Button>Default Button</Button>
    <br />
    <Button type="dashed">Dashed Button</Button>
    <br />
    <br />
    <Button type="text">Text Button</Button>
    <br />
    <Button type="link">Link Button</Button>
    <br />
    <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <br />
    <Button type="primary" shape="circle">
      A
    </Button>
    <br />
    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    <br />
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <br />
    <Button icon={<SearchOutlined />}>Search</Button>
    <br />
    <br />
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <br />
    <Button icon={<SearchOutlined />}>Search</Button>
    <br />
    <Tooltip title="search">
      <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <br />
    <Button type="dashed" icon={<SearchOutlined />}>
      Search
    </Button>
    <br />
  </div>
);

export default {
  title: 'Button',
  component: button,
};
