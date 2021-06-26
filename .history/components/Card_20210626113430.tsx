interface CardProps {
  href: string;
}

const Card: React.FC<CardProps> = ({ children, href }) => {
  return (
    <a href={href} className="ma pa4 ba br4 b--light no-underline">
      {children}
    </a>
  );
};

export default Card;
