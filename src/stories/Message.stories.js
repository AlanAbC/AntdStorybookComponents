import React from 'react';
import { message, Button } from 'antd';
import '../less/index.less';

const info = () => {
  message.info('This is a normal message');
};

const success = () => {
  message.success('This is a success message');
};

const error = () => {
  message.error('This is an error message');
};

const warning = () => {
  message.warning('This is a warning message');
};

export const messageComponent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Button type="primary" onClick={info}>
      Display normal message
    </Button>
    <br />
    <Button onClick={success}>Success</Button>
    <br />
    <Button onClick={error}>Error</Button>
    <br />
    <Button onClick={warning}>Warning</Button>
  </div>
);

export default {
  title: 'Message',
  component: messageComponent,
};
