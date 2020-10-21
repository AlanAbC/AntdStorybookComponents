import React from 'react';
import { TreeSelect } from 'antd';
import '../less/index.less';

const { TreeNode } = TreeSelect;

export const treeSelect = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <TreeSelect
      showSearch
      style={{ width: 300 }}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
    >
      <TreeNode value="parent 1" title="parent 1">
        <TreeNode value="parent 1-0" title="parent 1-0">
          <TreeNode value="leaf1" title="my leaf" />
          <TreeNode value="leaf2" title="your leaf" />
        </TreeNode>
        <TreeNode value="parent 1-1" title="parent 1-1">
          <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} />
        </TreeNode>
      </TreeNode>
    </TreeSelect>
  </div>
);

export default {
  title: 'TreeSelect',
  component: treeSelect,
};
