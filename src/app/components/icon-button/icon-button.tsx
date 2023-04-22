type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const IconButton: React.FC<ButtonProps> = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`
      flex 
      justify-center 
      items-center
      gap-2
      p-2 
      transition 
      duration-150 
      ease-in-out 
      border 
      border-transparent 
      rounded-md 
      bg-transparent
      text-white
      hover:bg-black
      hover:border-gray-900
      hover:text-white 
      focus:outline-none 
      focus:text-white
      focus:bg-gray-900 
      active:bg-gray-900 ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
