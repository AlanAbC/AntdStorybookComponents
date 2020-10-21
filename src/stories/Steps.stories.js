import React from 'react';
import { Steps } from 'antd';
import '../less/index.less';

const { Step } = Steps;

export const steps = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Steps size="small" current={1}>
      <Step title="Finished" />
      <Step title="In Progress" />
      <Step title="Waiting" />
    </Steps>
  </div>
);

export default {
  title: 'Steps',
  component: steps,
};
