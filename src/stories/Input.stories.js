import React from 'react';
import { Input, InputNumber } from 'antd';
import '../less/index.less';

const { Search, TextArea } = Input;

export const input = () => (
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', width: 500,
  }}
  >
    <h2>Input</h2>
    <Input placeholder="Basic" />
    <br />
    <h2>Search</h2>
    <br />
    <Search placeholder="input search text" style={{ width: 200 }} />
    <br />
    <br />
    <Search placeholder="input search text" enterButton />
    <br />
    <br />
    <Search placeholder="input search text" enterButton="Search" size="large" />
    <br />
    <h2>TextArea</h2>
    <br />
    <TextArea rows={4} />
    <h2>Input Number</h2>
    <br />
    <InputNumber min={1} max={10} defaultValue={3} />
  </div>
);

export default {
  title: 'Input',
  component: input,
};
