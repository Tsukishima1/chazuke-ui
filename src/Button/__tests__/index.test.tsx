import { render } from '@testing-library/react';
import React from 'react';
import Button from '../index';

describe('Button', () => {
  it('能够正确渲染按钮文字', () => {
    const buttonText = '按钮文字';
    const { getByRole } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement.innerHTML).toBe(buttonText);
  });

  it('能够正确渲染默认样式的按钮', () => {
    const { getByRole } = render(<Button>默认按钮</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement.classList.contains('czk-btn')).toBe(true);
  });

  it('能够正确渲染禁用按钮', () => {
    const { getByRole } = render(<Button disabled>禁用按钮</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement.hasAttribute('disabled')).toBe(true);
    expect(buttonElement.classList.contains('disabled:opacity-50')).toBe(true);
    expect(
      buttonElement.classList.contains('disabled:cursor-not-allowed'),
    ).toBe(true);
  });

  it('能够触发点击事件', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>按钮文字</Button>,
    );
    const buttonElement = getByRole('button');
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
