import { Button, Input } from 'chazuke-ui';
import React from 'react';

export default () => {
  return (
    <div className="flex justify-center items-center">
      <Input type="email" placeholder="请输入邮箱地址" />
      <Button variant="primary">提交</Button>
    </div>
  );
};
