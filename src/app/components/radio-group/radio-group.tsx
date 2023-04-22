import { ChangeEventHandler, useId } from 'react';

import RadioButton from '../radio/radio-button';

type RadioGroupProps = {
  data: { label: string; value: any }[];
  name: string;
  value?: any;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  data,
  name,
  value,
  onChange,
}: RadioGroupProps) => {
  const id = useId();
  return (
    <div className='flex gap-1 ml-1 flex-col mt-1 mb-1'>
      {data.map((item) => {
        return (
          <RadioButton
            key={id + item.value.toString()}
            label={item.label}
            value={item.value}
            name={name}
            onChange={onChange}
            checked={value == item.value}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;
