import React, { memo } from 'react';
import './styles/index.less' // 引入样式

export interface ButtonProps {
  /**
   * @description 按钮类型
   * @default 'default'
   */
  variant?: 'primary' | 'default';
  /**
   * @description 按钮内容
   */
  children?: React.ReactNode;
  /**
   * @description 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'default', children, onClick } = props
  return (
    <button
      type='button'
      className={`czk-btn ${variant ? 'czk-btn-' + variant : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
