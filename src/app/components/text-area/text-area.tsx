import { DetailedHTMLProps, TextareaHTMLAttributes, forwardRef, useId } from 'react';

import clsx from 'clsx';

type TextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label?: string;
};

type Ref = HTMLTextAreaElement;

export const TextArea = forwardRef<Ref, TextAreaProps>(({ label, rows = 4, ...rest }, ref) => {
  const id = useId();
  return (
    <>
      {label && (
        <label htmlFor={id} className='block mb-2 text-sm font-medium text-white'>
          {label}
        </label>
      )}
      <textarea
        {...rest}
        id={id}
        ref={ref}
        rows={rows}
        className={clsx(
          'block p-2.5 w-full text-sm',
          'text-white bg-gray-900',
          'rounded-lg border border-gray-700',
          'focus:ring-yellow-400 focus:border-yellow-400',
        )}
      />
    </>
  );
});

TextArea.displayName = 'TextArea';
export default TextArea;
