import clsx from 'clsx';

type VariantButton = 'contained' | 'outlined';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: VariantButton;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'contained',
  children,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center h-12 px-4 text-sm font-medium',
        'text-center gap-2 transition-colors duration-300 transform',
        variant === 'contained' &&
          'rounded-md lg:h-10 bg-primary text-black hover:bg-yellow-200 hover:border-gray-900',
        variant === 'outlined' &&
          'border rounded-lg lg:h-10 border-gray-900 bg-black hover:bg-gray-900 hover:border-gray-900',
        className,
        disabled === true ? 'cursor-not-allowed opacity-50' : '',
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
