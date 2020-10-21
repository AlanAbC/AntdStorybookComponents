import React from 'react';
import { DatePicker } from 'antd';
import '../less/index.less';

const { RangePicker } = DatePicker;

export const datepicker = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2>Datepicker</h2>
    <br />
    <DatePicker />
    <br />
    <DatePicker picker="week" />
    <br />
    <DatePicker picker="month" />
    <br />
    <DatePicker picker="quarter" />
    <br />
    <DatePicker picker="year" />
    <br />
    <h2>RangePicker</h2>
    <br />
    <RangePicker />
    <br />
    <RangePicker showTime />
    <br />
    <RangePicker picker="week" />
    <br />
    <RangePicker picker="month" />
    <br />
    <RangePicker picker="year" />
    <br />
  </div>
);

export default {
  title: 'Datepicker',
  component: datepicker,
};
