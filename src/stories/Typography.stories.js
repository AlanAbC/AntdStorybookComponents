import React from 'react';
import { Typography } from 'antd';
import '../less/index.less';

const { Title, Text, Link } = Typography;

export const typography = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
    <Title level={5}>h5. Ant Design</Title>
    <br />
    <Text>Ant Design (default)</Text>
    <br />
    <Text type="secondary">Ant Design (secondary)</Text>
    <br />
    <Text type="success">Ant Design (success)</Text>
    <br />
    <Text type="warning">Ant Design (warning)</Text>
    <br />
    <Text type="danger">Ant Design (danger)</Text>
    <br />
    <Text disabled>Ant Design (disabled)</Text>
    <br />
    <Text mark>Ant Design (mark)</Text>
    <br />
    <Text code>Ant Design (code)</Text>
    <br />
    <Text keyboard>Ant Design (keyboard)</Text>
    <br />
    <Text underline>Ant Design (underline)</Text>
    <br />
    <Text delete>Ant Design (delete)</Text>
    <br />
    <Text strong>Ant Design (strong)</Text>
    <br />
    <Link href="https://ant.design" target="_blank">
      Ant Design (Link)
    </Link>
  </div>
);

export default {
  title: 'Typography',
  component: typography,
};
