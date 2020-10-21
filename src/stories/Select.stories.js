import React from 'react';
import { Select } from 'antd';
import '../less/index.less';

const { Option, OptGroup } = Select;

const children = [];

// eslint-disable-next-line no-plusplus
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

export const select = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2>Select</h2>
    <br />
    <Select defaultValue="lucy" style={{ width: 200 }}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <br />
    <Select defaultValue="lucy" style={{ width: 200 }} disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
    <br />
    <Select defaultValue="lucy" style={{ width: 200 }} loading>
      <Option value="lucy">Lucy</Option>
    </Select>
    <br />
    <Select defaultValue="lucy" style={{ width: 200 }} allowClear>
      <Option value="lucy">Lucy</Option>
    </Select>
    <br />
    <h2>Multiple</h2>
    <br />
    <Select
      mode="multiple"
      allowClear
      style={{ width: 200 }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
    >
      {children}
    </Select>
    <br />
    <h2>Group</h2>
    <br />
    <Select defaultValue="lucy" style={{ width: 200 }}>
      <OptGroup label="Manager">
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
      </OptGroup>
      <OptGroup label="Engineer">
        <Option value="Yiminghe">yiminghe</Option>
      </OptGroup>
    </Select>
  </div>
);

export default {
  title: 'Select',
  component: select,
};
