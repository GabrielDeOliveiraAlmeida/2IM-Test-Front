import { DetailedHTMLProps, InputHTMLAttributes, useId } from 'react';

import clsx from 'clsx';

type TextAreaProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input: React.FC<TextAreaProps> = ({
  error = undefined,
  label,
  value = '',
  onChange,
  className,
  ...rest
}: TextAreaProps) => {
  const id = useId();
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            'block mb-2 text-sm font-medium text-white',
            error !== undefined
              ? 'block mb-2 text-sm font-medium text-red-700 dark:text-red-500'
              : '',
          )}
        >
          {label}
        </label>
      )}
      <input
        {...rest}
        id={id}
        onChange={onChange}
        value={value}
        className={clsx(
          'block p-2.5 w-full text-sm',
          'text-white bg-gray-900',
          'rounded-lg border border-gray-700',
          'focus:ring-yellow-400 focus:border-yellow-400',
        )}
      />
      {error && (
        <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
          <span className='font-medium'>{error}</span>
        </p>
      )}
    </div>
  );
};

export default Input;
