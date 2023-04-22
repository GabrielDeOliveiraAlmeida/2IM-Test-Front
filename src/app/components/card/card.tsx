import clsx from 'clsx';

type VariantCard = 'contained' | 'outlined';

type CardProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: React.ReactNode;
  title?: React.ReactNode;
  variant?: VariantCard;
};

const Card: React.FC<CardProps> = ({
  children,
  title,
  variant = 'contained',
  className = '',
  ...rest
}: CardProps) => {
  return (
    <div
      {...rest}
      className={clsx(
        'p-6 rounded-lg border',
        variant === 'outlined' ? 'shadow-md bg-gray-900 border-gray-800' : '',
        variant === 'contained' ? 'shadow-md bg-gray-800 border-gray-700' : '',
        className,
      )}
    >
      {title && <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>{title}</h5>}
      {children}
    </div>
  );
};

export default Card;
