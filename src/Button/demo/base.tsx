import React from "react";
import { Button } from "chazuke-ui";

export default () => {
  return (
    <div>
      <Button variant="default">默认按钮</Button>&nbsp;
      <Button variant="primary">主要按钮</Button>&nbsp;
      <Button variant="ghost">透明按钮</Button>&nbsp;
      <Button variant="link">链接按钮</Button>&nbsp;
      <Button disabled>禁用按钮</Button>
    </div>
  );
}
