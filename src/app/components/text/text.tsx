type TitleProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  children: React.ReactNode;
};
const Text: React.FC<TitleProps> = ({ children, className = '', ...rest }: TitleProps) => {
  return (
    <p {...rest} className={`m-0 text-base sm:text-base ${className}`}>
      {children}
    </p>
  );
};

export default Text;
