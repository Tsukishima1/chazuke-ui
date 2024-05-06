import React from 'react';
import { cn } from '../../lib/utils';
import {cva, type VariantProps} from "class-variance-authority"

const buttonVariants = cva(
  "px-[15px] py-[8px] rounded-[6px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-ring focus-visible:ring-offset-2 hover:opacity-85 active:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#f0f0f0] disabled:text-[#333333]",
  {
    variants: {
      variant: {
        default: "czk-btn-default bg-[#f0f0f0] text-[#333333]",
        primary: "czk-btn-primary bg-primary text-[#ffffff]",
        ghost: "czk-btn-ghost bg-[transparent] border-[1px solid #1890ff] hover:bg-[#f0f0f0]",
        link: "czk-btn-link underline underline-offset-[4px] underline-[#1890ff] hover:underline-[#40a9ff] text-[--primary-color] px-[0px]",
      },
      size: {
        sm: "czk-btn-sm text-[12px] px-[10px] py-[6px]",
        md: "czk-btn-md text-[14px] px-[15px] py-[8px]",
        lg: "czk-btn-lg text-[16px] px-[20px] py-[10px]",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
      asChild?: boolean;
    }

const Button: React.FC<ButtonProps> = (props) => {
  const { asChild=false, className, ...rest } = props;
  const Component = asChild ? 'span' : 'button';
  return (
    <Component
      className={cn(buttonVariants({className, ...rest}),"czk-btn")}
      {...rest}
    />
  );
}

export default Button;
