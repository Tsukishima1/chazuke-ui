import { Button } from 'chazuke-ui';
import React from 'react';

export default () => {
  return (
    <div>
      <Button variant="default">默认按钮</Button>
      <Button variant="primary">主要按钮</Button>
      <Button variant="ghost">透明按钮</Button>
      <Button variant="link">链接按钮</Button>
      <Button disabled>禁用按钮</Button>
    </div>
  );
};
