import { ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';
import './Button.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'contained';
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, className, variant = 'outlined', ...restProps }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn('button', className, {
        button_contained: variant === 'contained',
      })}
      {...restProps}
    >
      {children}
    </button>
  ),
);

export default Button;
