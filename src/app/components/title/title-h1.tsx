type TitleProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  children: React.ReactNode;
};
const Title: React.FC<TitleProps> = ({ children, className = '', ...rest }: TitleProps) => {
  return (
    <h1 {...rest} className={`text-3xl sm:text-5xl font-bold ${className}`}>
      {children}
    </h1>
  );
};

export default Title;
