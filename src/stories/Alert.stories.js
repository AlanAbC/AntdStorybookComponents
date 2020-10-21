import React from 'react';
import { Alert } from 'antd';
import '../less/index.less';

export const alert = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Alert style={{ width: 500 }} message="Success Tips" type="success" showIcon />
    <br />
    <Alert style={{ width: 500 }} message="Informational Notes" type="info" showIcon />
    <br />
    <Alert style={{ width: 500 }} message="Warning" type="warning" showIcon closable />
    <br />
    <Alert style={{ width: 500 }} message="Error" type="error" showIcon />
    <br />
    <Alert
      style={{ width: 500 }}
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
    <br />
    <Alert
      style={{ width: 500 }}
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
    />
    <br />
    <Alert
      style={{ width: 500 }}
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
    />
    <br />
    <Alert
      style={{ width: 500 }}
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </div>
);

export default {
  title: 'Alert',
  component: alert,
};
