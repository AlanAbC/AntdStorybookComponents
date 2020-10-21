import React from 'react';
import { Tag } from 'antd';
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import '../less/index.less';

export const tag = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Tag>Tag 1</Tag>
    <br />
    <Tag>
      <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
    </Tag>
    <br />
    <Tag closable>
      Tag 2
    </Tag>
    <br />
    <Tag color="magenta">magenta</Tag>
    <br />
    <Tag color="red">red</Tag>
    <br />
    <Tag color="volcano">volcano</Tag>
    <br />
    <Tag color="orange">orange</Tag>
    <br />
    <Tag color="gold">gold</Tag>
    <br />
    <Tag color="lime">lime</Tag>
    <br />
    <Tag color="green">green</Tag>
    <br />
    <Tag color="cyan">cyan</Tag>
    <br />
    <Tag color="blue">blue</Tag>
    <br />
    <Tag color="geekblue">geekblue</Tag>
    <br />
    <Tag color="purple">purple</Tag>
    <br />
    <Tag icon={<TwitterOutlined />} color="#55acee">
      Twitter
    </Tag>
    <br />
    <Tag icon={<YoutubeOutlined />} color="#cd201f">
      Youtube
    </Tag>
    <br />
    <Tag icon={<FacebookOutlined />} color="#3b5999">
      Facebook
    </Tag>
    <br />
    <Tag icon={<LinkedinOutlined />} color="#55acee">
      LinkedIn
    </Tag>
    <br />
    <Tag icon={<CheckCircleOutlined />} color="success">
      success
    </Tag>
    <br />
    <Tag icon={<SyncOutlined spin />} color="processing">
      processing
    </Tag>
    <br />
    <Tag icon={<CloseCircleOutlined />} color="error">
      error
    </Tag>
    <br />
    <Tag icon={<ExclamationCircleOutlined />} color="warning">
      warning
    </Tag>
    <br />
    <Tag icon={<ClockCircleOutlined />} color="default">
      waiting
    </Tag>
    <br />
    <Tag icon={<MinusCircleOutlined />} color="default">
      stop
    </Tag>
    <br />
  </div>
);

export default {
  title: 'Tag',
  component: tag,
};
