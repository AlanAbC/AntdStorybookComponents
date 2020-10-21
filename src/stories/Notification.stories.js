import React from 'react';
import { Button, notification, Space } from 'antd';
import '../less/index.less';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

export const notificationComponent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Space>
      <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
    </Space>
  </div>
);

export default {
  title: 'Notification',
  component: notificationComponent,
};
