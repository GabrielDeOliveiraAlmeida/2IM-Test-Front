import { DetailedHTMLProps, InputHTMLAttributes, useId } from 'react';

type RadioButtonProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
};

const RadioButton: React.FC<RadioButtonProps> = ({ label, ...rest }: RadioButtonProps) => {
  const id = useId();
  return (
    <div className='flex gap-1 items-center '>
      <input
        {...rest}
        id={id}
        type='radio'
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600'
      />
      {label && (
        <label htmlFor={id} className='block text-sm font-medium text-white'>
          {label}
        </label>
      )}
    </div>
  );
};

export default RadioButton;
