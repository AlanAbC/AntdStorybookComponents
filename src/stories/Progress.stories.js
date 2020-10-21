import React from 'react';
import { Progress } from 'antd';
import '../less/index.less';

export const progress = () => (
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', width: 500,
  }}
  >
    <Progress percent={30} />
    <br />
    <Progress percent={50} status="active" />
    <br />
    <Progress percent={70} status="exception" />
    <br />
    <Progress percent={100} />
    <br />
    <Progress percent={50} showInfo={false} />
    <br />
    <Progress type="circle" percent={75} />
    <br />
    <Progress type="circle" percent={70} status="exception" />
    <br />
    <Progress type="circle" percent={100} />
  </div>
);

export default {
  title: 'Progress',
  component: progress,
};
