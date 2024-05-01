import { ComponentProps } from "react";

type ButtonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary' | 'tertiary';
  /** The medium is the default */
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
};

/**
 * Renders a customizable button component.
 */
const Button = ({ variant = 'primary', size = 'medium', onClick, ...props }: ButtonProps) => {
  const variantClasses = {
    primary: ` bg-rose-700 border-rose-700 border-2 text-slate-50 hover:bg-rose-800 hover:border-rose-800
                disabled:opacity-50 `
    ,
    secondary: ` bg-transparent border-2 border-rose-700 hover:border-rose-700 hover:bg-rose-700 hover:text-slate-50 
                disabled:hover:bg-transparent disabled:hover:text-slate-900 disabled:opacity-50`,
    tertiary: ' bg-transparent text-gray-900 border-0 outline-0 hover:border-0  hover:text-slate-950',
  };

  const sizeClasses = {
    small: 'px-2 py-1',
    medium: 'px-4 py-2', 
    large: 'px-6 py-3',
  }

  return (
    <button
      className={`button hover:outline-0 transition-colors${variantClasses[variant]} ${sizeClasses[size]}`}
      type="button"
      onClick={onClick}
      {...props}
    />
  );
};

export default Button;
