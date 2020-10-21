import React from 'react';
import { Collapse } from 'antd';
import '../less/index.less';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const { Panel } = Collapse;

export const collapse = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 400 }}>
    <Collapse defaultActiveKey={['1']}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3" disabled>
        <p>{text}</p>
      </Panel>
    </Collapse>
  </div>
);

export default {
  title: 'Collapse',
  component: collapse,
};
